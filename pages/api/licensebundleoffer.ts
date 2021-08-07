// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createReadStream } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import csvParser from "csv-parser";
import { LicenseCalculatorFormValues } from "../../components/LicenseCalculatorForm";
import { LicenseOffer } from "../../components/LicenseOfferCards";
import path from "path";

type LicensePrices = {
  Berechnungsformel: number;
  Einzellizenz: number;
  kleine_FS_Lizenz: number;
  mittlere_FS_Lizenz: number;
  große_FS_Lizenz: number;
  Floating_Lizenz: number;
};

const getPrices = () =>
  new Promise<LicensePrices[]>((resolve) => {
    const results: LicensePrices[] = [];
    createReadStream(
      path.join(process.cwd(), "public/data/license-bundles.csv")
    )
      .pipe(
        csvParser({
          mapHeaders: ({ header }) => header.trim(),
          mapValues: ({ value }) => parseFloat(value.trim()),
        })
      )
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => resolve(results));
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    singles?: LicenseOffer;
    cheapest: LicenseOffer;
    more: LicenseOffer;
  }>
) {
  const bf = 80;
  const values = req.body as LicenseCalculatorFormValues;
  const prices = (await getPrices())
    .sort((a, b) => a.Berechnungsformel - b.Berechnungsformel)
    .filter((p) => p.Berechnungsformel > bf)[0];

  const getOfferPrice = (offer: LicenseOffer) =>
    offer.floating * prices.Floating_Lizenz +
    offer.single * prices.Einzellizenz +
    offer.smallBundle * prices.kleine_FS_Lizenz +
    offer.mediumBundle * prices.mittlere_FS_Lizenz +
    offer.largeBundle * prices.große_FS_Lizenz;

  let singles = values.numLicenses - values.numFloating;
  const singlesOnly = new LicenseOffer();
  singlesOnly.single = singles;
  singlesOnly.floating = values.numFloating;
  singlesOnly.price = getOfferPrice(singlesOnly);

  const cheapest = new LicenseOffer();
  cheapest.floating = values.numFloating;

  if (Math.floor(singles) / 20 >= 1) {
    cheapest.largeBundle = Math.floor(singles / 20);
    singles -= cheapest.largeBundle * 20;
  }
  if (Math.floor(singles) / 10 >= 1) {
    cheapest.mediumBundle = Math.floor(singles / 10);
    singles -= cheapest.mediumBundle * 10;
  }
  if (Math.floor(singles) / 5 >= 1) {
    cheapest.smallBundle = Math.floor(singles / 5);
    singles -= cheapest.smallBundle * 5;
  }
  if (singles * prices.Einzellizenz > prices.kleine_FS_Lizenz) {
    singles = 0;
    addSmallBundle(cheapest);
  }
  cheapest.single = singles;
  cheapest.price = getOfferPrice(cheapest);

  const more = { ...cheapest };
  more.single = 0;
  addSmallBundle(more);
  more.price = getOfferPrice(more);

  res.status(200).json({
    singles: singlesOnly.single != cheapest.single ? singlesOnly : undefined,
    cheapest: cheapest,
    more: more,
  });
}

const addSmallBundle = (offer: LicenseOffer) => {
  offer.smallBundle += 1;
  if (offer.smallBundle == 2) {
    offer.mediumBundle += 1;
    offer.smallBundle = 0;
    if (offer.mediumBundle == 2) {
      offer.largeBundle += 1;
      offer.mediumBundle = 0;
    }
  }
};

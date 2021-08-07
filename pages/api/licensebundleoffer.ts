// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createReadStream } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import csvParser from "csv-parser";

type LicensePrices = {
  Einzellizenz: number;
  kleine_FS_Lizenz: number;
  mittlere_FS_Lizenz: number;
  große_FS_Lizenz: number;
  Floating_Lizenz: number;
};

type LicensePriceDict = { [Berechnungsformel: number]: LicensePrices };

const getPrices = () =>
  new Promise<LicensePriceDict>((resolve) => {
    const results: LicensePriceDict = {};
    createReadStream("public/data/license-bundles.csv")
      .pipe(
        csvParser({
          mapHeaders: ({ header }) => header.trim(),
          mapValues: ({ value }) => parseFloat(value.trim()),
        })
      )
      .on("data", ({ Berechnungsformel, ...data }) => {
        results[Berechnungsformel] = data;
      })
      .on("end", () => resolve(results));
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LicensePriceDict>
) {
  const prices = await getPrices();
  res.status(200).json(prices);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Dinero from "dinero.js";
import { createReadStream } from "fs";
import {readFile} from "fs/promises"
import type { NextApiRequest, NextApiResponse } from "next";
import csvParser from "csv-parser";
import path from "path";

type License = {
  name: string;
  price: Dinero.Dinero;
  users: number;
};

const einzel: License = {
  name: "Einzellizenz",
  price: Dinero({ amount: 2280, currency: "EUR" }),
  users: 1,
};

type LicenseBundle = {
  licenses: [License];
};

type LicenseBundleOffer = {
  exact: LicenseBundle;
  cheapest?: LicenseBundle;
  recommended: LicenseBundle;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LicenseBundleOffer>
) {
  const results = [];

  const data = await readFile(path.resolve("./public", "data/license-bundles.csv")

  createReadStream(path.resolve("./public", "data/license-bundles.csv"))
    .pipe(
      csvParser({
        mapHeaders: ({ header }) => header.trim(),
        mapValues: ({ value }) => parseFloat(value.trim()),
      })
    )
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log(results);
    });
  res.status(200).json({
    exact: {
      licenses: [
        {
          name: "Einzellizenz",
          price: Dinero({ amount: 2280, currency: "EUR" }),
          users: 1,
        },
      ],
    },
    recommended: {
      licenses: [
        {
          name: "Einzellizenz",
          price: Dinero({ amount: 2280, currency: "EUR" }),
          users: 1,
        },
      ],
    },
  });
}

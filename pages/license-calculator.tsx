import React, { useState } from "react";
import {
  LicenseCalculatorForm,
  LicenseCalculatorFormValues,
} from "../components/LicenseCalculatorForm";
import { LicenseOffer } from "../components/LicenseOffer";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const LicenseCalculator = () => {
  const [licenses, setLicenses] = useState({ numLicenses: 1, numFloating: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (values: LicenseCalculatorFormValues) => {
    setIsLoading(true);
    console.log(values);
    await sleep(1000);
    setLicenses(values);
    setIsLoading(false);
  };

  return (
    <>
      <LicenseCalculatorForm onSubmit={handleFormSubmit} />
      <hr className="my-4" />
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <LicenseOffer licenses={licenses} />
      )}
    </>
  );
};

export default LicenseCalculator;

import axios from "axios";
import React, { useState } from "react";
import {
  LicenseCalculatorForm,
  LicenseCalculatorFormValues,
} from "../components/LicenseCalculatorForm";
import {
  LicenseOffer,
  LicenseOfferCards,
} from "../components/LicenseOfferCards";

const LicenseCalculator = () => {
  const [offer, setOffer] = useState({
    cheapest: new LicenseOffer(),
    more: new LicenseOffer(),
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (values: LicenseCalculatorFormValues) => {
    setIsLoading(true);
    const response = await axios.post("/api/licensebundleoffer", values);
    setOffer(response.data);
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
        <LicenseOfferCards {...offer} />
      )}
    </>
  );
};

export default LicenseCalculator;

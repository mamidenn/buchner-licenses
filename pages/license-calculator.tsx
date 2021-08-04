import React, { useState } from "react";
import { Card } from "../components/Card";
import { LicenseCalculatorForm } from "../components/LicenseCalculatorForm";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const LicenseCalculator = () => {
  const [licenses, setLicenses] = useState({ numLicenses: 1, numFloating: 0 });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <LicenseCalculatorForm
        onSubmit={async (values) => {
          setIsLoading(true);
          console.log(values);
          await sleep(1000);
          setLicenses(values);
          setIsLoading(false);
        }}
      />
      <hr className="my-4" />
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <Card header="Gratis">
              <h1 className="card-title text-nowrap">
                {licenses.numLicenses}€
                <small className="text-muted fw-light">/Monat</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Velit impedit</li>
                <li>dolore ipsa est</li>
                <li>
                  <strong>repudiandae</strong> voluptates
                </li>
              </ul>
              <button className="w-100 btn btn-lg btn-outline-primary">
                Jetzt gratis loslegen
              </button>
            </Card>
          </div>
          <div className="col">
            <Card header="Persönlich">
              <h1 className="card-title text-nowrap">
                15€<small className="text-muted fw-light">/Monat</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Velit impedit</li>
                <li>dolore ipsa est</li>
                <li>reiciendis</li>
                <li>blanditiis nobis</li>
              </ul>
              <button className="w-100 btn btn-lg btn-primary">Kaufen</button>
            </Card>
          </div>
          <div className="col">
            <Card header="Klassenraum" style="primary">
              <h1 className="card-title text-nowrap">
                <small className="text-muted fw-light">ab</small> 50€
                <small className="text-muted fw-light">/Monat</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Velit impedit</li>
                <li>dolore ipsa est</li>
                <li>reiciendis</li>
                <li>blanditiis nobis</li>
                <li>
                  <strong>ipsam asperiores</strong>
                </li>
              </ul>
              <button className="w-100 btn btn-lg btn-primary">
                Kontaktieren Sie uns
              </button>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default LicenseCalculator;

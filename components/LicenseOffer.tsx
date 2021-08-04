import React, { FunctionComponent } from "react";
import { Card } from "./Card";

type LicenseOfferProps = {
  licenses: { numLicenses: number; numFloating: number };
};

export const LicenseOffer: FunctionComponent<LicenseOfferProps> = ({
  licenses,
}) => {
  return (
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
  );
};

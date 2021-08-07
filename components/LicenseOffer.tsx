import React, { FunctionComponent } from "react";
import { ButtonCard } from "./ButtonCard";
import { Card } from "./Card";

export interface LicenseOffer {
  single: number;
  smallBundle: number;
  mediumBundle: number;
  largeBundle: number;
  floating: number;
  price: number;
}

type LicenseOfferProps = {
  offers: [LicenseOffer, LicenseOffer, LicenseOffer];
};

export const LicenseOffer: FunctionComponent<LicenseOfferProps> = ({
  offers,
}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col mb-3">
        <ButtonCard header="Genau passend" button="Kaufen" style="muted">
          <h1 className="card-title text-nowrap">{offers[0].price}€</h1>
          <ul className="list-unstyled mt-3 mb-4">
            {offers[0].single > 0 && <li>{offers[0].single} × Einzellizenz</li>}
            {offers[0].smallBundle > 0 && (
              <li>{offers[0].smallBundle} × kleine FS-Lizenz</li>
            )}
            {offers[0].mediumBundle > 0 && (
              <li>{offers[0].mediumBundle} × mittlere FS-Lizenz</li>
            )}
            {offers[0].largeBundle > 0 && (
              <li>{offers[0].largeBundle} × große FS-Lizenz</li>
            )}
            {offers[0].floating > 0 && (
              <li>{offers[0].floating} × Floating Lizenz</li>
            )}
          </ul>
        </ButtonCard>
      </div>
      <div className="col mb-3">
        <ButtonCard header="Günstigstes Angebot" button="Kaufen">
          <h1 className="card-title text-nowrap">{offers[1].price}€</h1>
          <ul className="list-unstyled mt-3 mb-4">
            {offers[1].single > 0 && <li>{offers[1].single} × Einzellizenz</li>}
            {offers[1].smallBundle > 0 && (
              <li>{offers[1].smallBundle} × kleine FS-Lizenz</li>
            )}
            {offers[1].mediumBundle > 0 && (
              <li>{offers[1].mediumBundle} × mittlere FS-Lizenz</li>
            )}
            {offers[1].largeBundle > 0 && (
              <li>{offers[1].largeBundle} × große FS-Lizenz</li>
            )}
            {offers[1].floating > 0 && (
              <li>{offers[1].floating} × Floating Lizenz</li>
            )}
          </ul>
          {offers[0].price > offers[1].price && (
            <div className="mb-2">
              Sie sparen{" "}
              <strong>
                {(
                  ((offers[0].price - offers[1].price) / offers[0].price) *
                  100
                ).toLocaleString("de-DE", { maximumFractionDigits: 0 })}
                %
              </strong>
            </div>
          )}
        </ButtonCard>
      </div>
      <div className="col mb-3">
        <ButtonCard
          header="Darf's etwas mehr sein?"
          style="primary"
          button="Jetzt zuschlagen"
        >
          <h1 className="card-title text-nowrap">{offers[2].price}€</h1>
          <ul className="list-unstyled mt-3 mb-4">
            {offers[2].single > 0 && <li>{offers[2].single} × Einzellizenz</li>}
            {offers[2].smallBundle > 0 && (
              <li>{offers[2].smallBundle} × kleine FS-Lizenz</li>
            )}
            {offers[2].mediumBundle > 0 && (
              <li>{offers[2].mediumBundle} × mittlere FS-Lizenz</li>
            )}
            {offers[2].largeBundle > 0 && (
              <li>{offers[2].largeBundle} × große FS-Lizenz</li>
            )}
            {offers[2].floating > 0 && (
              <li>{offers[2].floating} × Floating Lizenz</li>
            )}
          </ul>
        </ButtonCard>
      </div>
    </div>
  );
};

import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { ButtonCard } from "./ButtonCard";

export class LicenseOffer {
  single = 0;
  smallBundle = 0;
  mediumBundle = 0;
  largeBundle = 0;
  floating = 0;
  price = 0;
}

type LicenseOfferProps = {
  singles?: LicenseOffer;
  cheapest: LicenseOffer;
  more: LicenseOffer;
};

export const LicenseOfferCards: FunctionComponent<LicenseOfferProps> = ({
  singles,
  cheapest,
  more,
}) => {
  return (
    <div
      className={classNames(
        "row",
        "row-cols-1",
        { "row-cols-md-3": singles },
        { "row-cols-md-2": !singles },
        "mb-3",
        "text-center"
      )}
    >
      {singles && (
        <div className="col mb-3">
          <ButtonCard header="Einzellizenzen" button="Kaufen" style="muted">
            {priceList(singles)}
          </ButtonCard>
        </div>
      )}
      <div className="col mb-3">
        <ButtonCard header="Unser Angebot" button="Kaufen" style="primary">
          {priceList(cheapest)}
          {singles && singles.price > cheapest.price && (
            <p className="lead">
              Sie sparen{" "}
              <strong>
                {(
                  ((singles.price - cheapest.price) / singles.price) *
                  100
                ).toLocaleString("de-DE", { maximumFractionDigits: 0 })}
                %
              </strong>
            </p>
          )}
        </ButtonCard>
      </div>
      <div className="col mb-3">
        <ButtonCard header="Raum nach oben" button="Jetzt zuschlagen">
          {priceList(more)}
          {singles && singles.price > more.price && (
            <p className="lead">
              Sie sparen{" "}
              <strong>
                {(
                  ((singles.price - more.price) / singles.price) *
                  100
                ).toLocaleString("de-DE", { maximumFractionDigits: 0 })}
                %
              </strong>
            </p>
          )}
        </ButtonCard>
      </div>
    </div>
  );
};

const priceList = (offer: LicenseOffer) => (
  <>
    <h1 className="card-title text-nowrap mb-0">
      {offer.price.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "symbol",
      })}
    </h1>
    <p className="text-muted">
      {(
        offer.price /
        (offer.single +
          offer.floating +
          5 * offer.smallBundle +
          10 * offer.mediumBundle +
          20 * offer.largeBundle)
      ).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "symbol",
      })}{" "}
      pro Lizenz
    </p>
    <ul className="list-unstyled mt-3 mb-1">
      {offer.single > 0 && <li>{offer.single} × Einzellizenz</li>}
      {offer.smallBundle > 0 && <li>{offer.smallBundle} × kleine FS-Lizenz</li>}
      {offer.mediumBundle > 0 && (
        <li>{offer.mediumBundle} × mittlere FS-Lizenz</li>
      )}
      {offer.largeBundle > 0 && <li>{offer.largeBundle} × große FS-Lizenz</li>}
      {offer.floating > 0 && <li>{offer.floating} × Floating Lizenz</li>}
    </ul>
    <hr className="my-1" />
    <p>
      {offer.single +
        offer.floating +
        5 * offer.smallBundle +
        10 * offer.mediumBundle +
        20 * offer.largeBundle}{" "}
      Lizenzen
    </p>
  </>
);

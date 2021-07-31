import React, { FunctionComponent } from "react";
import classNames from "classnames";

type CardProps = {
  header: string;
  primary?: boolean;
};

export const Card: FunctionComponent<CardProps> = ({
  header,
  children,
  primary,
}) => {
  return (
    <div
      className={classNames("card", "rounded-3", "shadow-sm", {
        "border-primary": primary,
      })}
    >
      <div
        className={classNames("card-header", {
          "bg-primary": primary,
          "text-white": primary,
          "border-primary": primary,
        })}
      >
        <h4>{header}</h4>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

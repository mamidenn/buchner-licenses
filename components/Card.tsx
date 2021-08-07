import React, { FunctionComponent } from "react";
import classNames from "classnames";

type CardProps = {
  header: string;
  style?: "primary" | "muted" | "default";
};

export const Card: FunctionComponent<CardProps> = ({
  header,
  children,
  style = "default",
}) => {
  return (
    <div
      className={classNames("card", "rounded-3", "shadow-sm", {
        "border-primary": style == "primary",
      })}
    >
      <div
        className={classNames("card-header", "py-3", {
          "bg-primary": style == "primary",
          "text-white": style == "primary",
          "border-primary": style == "primary",
        })}
      >
        <h4 className="my-0">{header}</h4>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

import classNames from "classnames";
import React, { FunctionComponent } from "react";
import { Card } from "./Card";

type ButtonCardProps = {
  header: string;
  button: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: "primary" | "muted" | "default";
};

export const ButtonCard: FunctionComponent<ButtonCardProps> = (props) => {
  return (
    <Card {...props}>
      {props.children}
      <button
        className={classNames("w-100", "btn", "btn-lg", {
          "btn-primary": props.style != "muted",
          "btn-outline-primary": props.style == "muted",
        })}
        onClick={props.onClick}
      >
        {props.button}
      </button>
    </Card>
  );
};

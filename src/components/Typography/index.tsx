import React, { PropsWithChildren, RefAttributes, HTMLAttributes } from "react";
import classes from "./styles.module.scss";

interface IProps
  extends PropsWithChildren,
    RefAttributes<any>,
    HTMLAttributes<HTMLElement> {
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "label"
    | "div";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "disclaimer";
  align?: "center" | "left" | "right";
}

const Typography: React.FC<IProps> = ({
  component = "p",
  color = "default",
  align,
  className = "",
  style,
  children,
  ...other
}) => {
  return React.createElement(
    component,
    {
      className: `${classes[component]} ${color} ${className}`,
      style: {
        ...style,
        ...(align ? { textAlign: align } : {}),
      },
      ...other,
    },
    children
  );
};

export default Typography;

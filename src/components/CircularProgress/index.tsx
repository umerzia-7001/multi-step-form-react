import React, { RefAttributes, HTMLAttributes } from "react";
import classes from "./styles.module.scss";

interface IProps extends RefAttributes<any>, HTMLAttributes<HTMLElement> {
  color?: "primary" | "info";
  size?: "sm" | "md" | "lg" | "xl";
}

const CircularProgress: React.FC<IProps> = ({
  size = "md",
  color = "primary",
  className = "",
  ...other
}) => {
  return React.createElement(
    "div",
    {
      className: `${classes.container} ${
        classes[`${size}Container`]
      } ${className}`,
      ...other,
    },
    <div
      className={`${classes.spinner} ${classes[color]} ${classes[size]}`}
    ></div>
  );
};

export default CircularProgress;

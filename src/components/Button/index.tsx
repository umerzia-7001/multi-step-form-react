import React, {
  PropsWithChildren,
  HTMLAttributes,
  HTMLProps,
  ReactNode,
} from "react";

import CircularProgress from "../CircularProgress";
import Ripple from "../Ripple";
import classes from "./styles.module.scss";

interface IProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  variant?: "text" | "contained" | "outlined" | "icon";
  color?: "primary" | "secondary" | "info" | "error" | "success";
  isLoading?: boolean;
  href?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  spinnerSize?: "sm" | "md" | "lg" | "xl";
}

const Button: React.FC<IProps> = ({
  variant = "contained",
  color = "primary",
  startIcon,
  endIcon,
  href,
  isLoading = false,
  className = "",
  disabled,
  spinnerSize = "md",
  children,
  ...other
}) => {
  return React.createElement(
    href ? "a" : "button",
    {
      className: `${classes["button"]} ${classes[`${color}-bg`]}  ${
        classes[variant]
      }  ${className}`,
      href,
      disabled: disabled || isLoading,
      ...other,
    },
    <>
      {startIcon && <span className={classes.startIcon}>{startIcon}</span>}
      {children}
      {isLoading ? (
        <CircularProgress
          color="info"
          size={spinnerSize}
          className={classes.endIcon}
        />
      ) : (
        endIcon && <span className={classes.endIcon}>{endIcon}</span>
      )}
      {!disabled && <Ripple color={color} />}
    </>
  );
};

export default Button;

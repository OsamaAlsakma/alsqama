import { SvgIconComponent } from "@mui/icons-material";
import { FC, MouseEventHandler, ReactNode } from "react";
/* -------------------------------------------------------------------------- */
export enum AppButtonVariant {
  TEXT = "text",
  OUTLINED = "outlined",
  CONTAINTED = "contained",
}
/* -------------------------------------------------------------------------- */
export enum AppButtonTypes {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
}
/* -------------------------------------------------------------------------- */
export enum AppButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

/* -------------------------------------------------------------------------- */
export enum AppButtonColors {
  INHERIT = "inherit",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ERROR = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}

/* -------------------------------------------------------------------------- */
type ButtonCallback = MouseEventHandler<HTMLButtonElement> | undefined;
/* -------------------------------- Interface ------------------------------- */
export default interface IAppButtonVM {
  props: {
    title?: ReactNode;
    variant?: AppButtonVariant;
    isDisabled: boolean;
    leadingIcon?: SvgIconComponent | FC | string;
    trailingIcon?: SvgIconComponent | FC | string;
    size?: AppButtonSize;
    type?: AppButtonTypes;
    color?: AppButtonColors;
    href?: string;
  };
  onClick?: ButtonCallback;
}
/* ---------------------------------- Props --------------------------------- */

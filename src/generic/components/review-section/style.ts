import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import styled from "styled-components";
import {
  mainFontFamily,
  secondaryColor,
} from "~/bootstrap/helper/global-helper";

export const ReviewSectionTextField = styled(TextField)`
  && {
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${secondaryColor};
    }
  }
`;

export const ReviewSectionSubmit = styled(LoadingButton)`
  && {
    background-color: ${secondaryColor};
    color: black;
    font-weight: bold;
    font-family: ${mainFontFamily};
    padding-top: 8px;

    transition: all ease-in-out 200ms !important;
    &:hover {
      transform: scale(1.1);
      background-color: ${secondaryColor};
    }
  }
`;

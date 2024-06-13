import styled from "styled-components";
import {
  mainFontFamily,
  mediumScreenSize,
  primaryColor,
} from "~/bootstrap/helper/global-helper";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export const StyledFilterationStartAndEndDatesDesktopDatePicker = styled(
  DesktopDatePicker
)`
  && {
    & .MuiInputBase-input::placeholder {
      transform: translateY(2px);
    }
    border-radius: 32px;
    border: 1px solid black;
    width: 25%;
    @media (max-width: ${mediumScreenSize}) {
      width: 100%;
    }

    && .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    & .MuiInputBase-root {
      flex-direction: row-reverse;
      font-family: ${mainFontFamily};
      max-height: 46px;
    }

    & .MuiInputAdornment-root .MuiSvgIcon-root {
      color: ${primaryColor};
    }
  }
`;

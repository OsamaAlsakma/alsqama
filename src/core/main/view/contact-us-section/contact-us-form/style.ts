import Input from "@mui/material/Input/Input";
import TextField from "@mui/material/TextField/TextField";
import styled from "styled-components";
import {
  mainFontFamily,
  smallScreenSize,
} from "~/bootstrap/helper/global-helper";
import { StyledMainAppButton } from "~/bootstrap/helper/global-styles";

export const MainContactUsFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 33%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledMainContactUsForm = styled.form`
  width: 100%;
  color: white;
  @media (max-width: ${smallScreenSize}) {
    width: 100%;
  }
`;

export const MainContactUsInput = styled(Input)`
  && {
    margin-bottom: 10px;
    padding: 11px 8px 4px;
    border-radius: 8px;
    width: 100%;
    background-color: white;
    font-family: ${mainFontFamily};
  }
`;

export const MainContactUsTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    border-radius: 8px;
    width: 100%;
    outline: none;
    background-color: white;
  }
`;

export const MainContactUsSubmitButton = styled(StyledMainAppButton)`
  && {
    width: 100%;
    padding-top: 16px;
  }
`;

export const MainContactUsTitle = styled.h3`
  font-size: 24px;
  margin: 8px 0;
`;

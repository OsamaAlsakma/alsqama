import Input from "@mui/material/Input/Input";
import TextField from "@mui/material/TextField/TextField";
import styled from "styled-components";
import { StyledMainAppButton } from "~/bootstrap/helper/global-styles";
import * as palette from "~/bootstrap/helper/global-helper";

export const MainContactUsFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
`;

export const StyledMainContactUsForm = styled.form`
  width: 75%;
  color: white;

  @media (max-width: ${palette.smallScreenSize}) {
    width: 100%;
  }
`;

export const MainContactUsInput = styled(Input)`
  && {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    background-color: white;
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

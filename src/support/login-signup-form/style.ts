import Button from "@mui/material/Button/Button";
import Input from "@mui/material/Input/Input";
import styled from "styled-components";
import { StyledMainAppButton } from "~/bootstrap/helper/global-styles";
import LoginIcon from "@mui/icons-material/Login";
import * as palette from "~/bootstrap/helper/global-helper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const LoginSignupFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LoginSignupFormTitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;

export const LoginSignupFormTitle = styled.span`
  font-size: 24px;
  color: inherit;
`;

const commonIconStyle = `
width: 36px;
height: 36px;
`;

export const LoginFormIcon = styled(LoginIcon)`
  && {
    ${commonIconStyle}
  }
`;

export const SignupFormIcon = styled(AccountCircleIcon)`
  && {
    ${commonIconStyle}
  }
`;

export const LoginSignUpInput = styled(Input)`
  && {
    font-family: Tajawal;
    border: 1px solid #3d3d40;
    padding: 8px;
    padding-top: 12px;
    border-radius: 8px;
    width: 100%;
    font-size: 18px;
  }
`;

export const SubmitButton = styled(StyledMainAppButton)`
  && {
    padding-top: 12px;
    padding-bottom: 4px;
    width: 100%;
  }
`;

export const SwitchLoginSignupDiv = styled.div`
  text-align: center;
`;

export const SwitchLoginSignupButton = styled(Button)`
  && {
    color: ${palette.primaryColor};
    transition: all 0.1;
    font-size: 16px;
    &:hover {
      background-color: transparent;
      color: ${palette.secondaryColor};
    }
  }
`;

export const LoginFormErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;

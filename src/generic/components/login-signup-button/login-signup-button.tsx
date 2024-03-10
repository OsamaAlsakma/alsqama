import styled from "styled-components";
import AppButton from "../app-button/app-button";
import LoginSignupButtonVM from "./login-signup-button-vm";

export const StyledLoginSignupButton = styled(AppButton)`
  && {
    background-color: white;
    color: black;
    gap: 4px;

    &:hover {
      background-color: red;
    }
  }
`;

const LoginSignupButton = () => {
  const vm = new LoginSignupButtonVM().useVM();
  return <StyledLoginSignupButton vm={vm} />;
};

export default LoginSignupButton;

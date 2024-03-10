import LoginSignupButtonVM from "./login-signup-button-vm";
import { StyledLoginSignupButton } from "./style";

const LoginSignupButton = () => {
  const vm = new LoginSignupButtonVM().useVM();
  return <StyledLoginSignupButton vm={vm} />;
};

export default LoginSignupButton;

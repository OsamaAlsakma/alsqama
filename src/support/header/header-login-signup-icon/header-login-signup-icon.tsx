import di from "~/bootstrap/di";
import HeaderLoginSignupIconVM from "~/support/header/header-login-signup-icon/header-login-signup-icon-vm";
import { StyledHeaderLoginSignupIcon } from "~/support/header/header-login-signup-icon/style";

const HeaderLoginSignupIcon = () => {
  const vm = di.resolve(HeaderLoginSignupIconVM).useVM();
  return <StyledHeaderLoginSignupIcon vm={vm} />;
};

export default HeaderLoginSignupIcon;

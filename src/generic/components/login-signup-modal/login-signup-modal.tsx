import di from "~/bootstrap/di";
import AppModal from "~/generic/components/app-modal/app-modal";
import LoginSignupModalVM from "~/generic/components/login-signup-modal/login-sign-up-modal-vm";

const LoginSignupModal = () => {
  const vm = di.resolve(LoginSignupModalVM).useVM();
  return <AppModal vm={vm}>test</AppModal>;
};

export default LoginSignupModal;

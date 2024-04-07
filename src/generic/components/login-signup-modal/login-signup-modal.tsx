/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import di from "~/bootstrap/di";
import AppModal from "~/generic/components/app-modal/app-modal";
import LoginSignupModalVM from "~/generic/components/login-signup-modal/login-sign-up-modal-vm";
import LoginForm from "~/support/login-signup-form/login-form";
import SignupForm from "~/support/login-signup-form/signup-form";

export enum LoginSignupForms {
  LOGIN = "login",
  SIGNUP = "signup",
}

const LoginSignupModal = () => {
  const vm = di.resolve(LoginSignupModalVM).useVM();
  const [currentForm, setCurrentForm] = useState<LoginSignupForms>(
    LoginSignupForms.LOGIN
  );
  return (
    <AppModal vm={vm}>
      {currentForm === LoginSignupForms.LOGIN ? (
        <LoginForm setCurrentForm={setCurrentForm} />
      ) : (
        <SignupForm setCurrentForm={setCurrentForm} />
      )}
    </AppModal>
  );
};

export default LoginSignupModal;

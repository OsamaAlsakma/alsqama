import { useState } from "react";
import di from "~/bootstrap/di";
import { SetState } from "~/bootstrap/helper/global-types";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import AppModal from "~/generic/components/app-modal/app-modal";
import { LoginSignupForms } from "~/generic/components/login-signup-button/login-signup-new-button";
import LoginSignupModalVM from "~/generic/components/login-signup-modal/login-sign-up-modal-vm";
import LoginForm from "~/support/login-signup-forms/login-form";
import SignupForm from "~/support/login-signup-forms/signup-form";

interface ILoginSignupModalProps {
  currentForm: LoginSignupForms;
  setCurrentForm: SetState<LoginSignupForms>;
}

const LoginSignupModal = (props: ILoginSignupModalProps) => {
  const { currentForm, setCurrentForm } = props;
  const vm = di.resolve(LoginSignupModalVM).useVM();
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <AppModal vm={vm}>
        {currentForm === LoginSignupForms.LOGIN ? (
          <LoginForm setCurrentForm={setCurrentForm} />
        ) : (
          <SignupForm
            setShowMessage={setShowMessage}
            setCurrentForm={setCurrentForm}
          />
        )}
      </AppModal>
      <AlertMessage
        durationInMs={4000}
        message="تم إنشاء حساب بنجاح"
        open={showMessage}
        setOpen={setShowMessage}
      />
    </>
  );
};

export default LoginSignupModal;

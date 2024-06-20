import axios from "axios";
import { useState } from "react";
import di from "~/bootstrap/di";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { SetState } from "~/bootstrap/helper/global-types";
import Store from "~/bootstrap/helper/store/store-type";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import { LoginSignupForms } from "~/generic/components/login-signup-button/login-signup-new-button";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import NUserStore from "~/support/login-signup-forms/store/i-user-store";
import { userStoreKey } from "~/support/login-signup-forms/store/user-store";
import {
  LoginFormErrorMessage,
  LoginFormIcon,
  LoginSignUpInput,
  LoginSignupFormContainer,
  LoginSignupFormTitle,
  LoginSignupFormTitleAndIcon,
  SubmitButton,
  SwitchLoginSignupButton,
  SwitchLoginSignupDiv,
} from "~/support/login-signup-forms/style";

interface ILoginFormProps {
  setCurrentForm: SetState<LoginSignupForms>;
}

const LoginForm = (props: ILoginFormProps) => {
  const { setCurrentForm } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setIsOpen } = di.resolve(OpenLoginSignUpModalCTX).useContext();

  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${endpointsUrl.loginEndpoint}`, {
        email,
        password,
      });
      if (response.status === 200) {
        userStore.getState().storeUser({
          token: response.data.access_token,
        });

        setIsOpen(false);
        setEmail("");
        setPassword("");
        setIsError(false);
      }
    } catch (_error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <LoginSignupFormContainer onSubmit={handleSubmit}>
      {isLoading && <CircularLoader />}
      <LoginSignupFormTitleAndIcon>
        <LoginSignupFormTitle>تسجيل الدخول</LoginSignupFormTitle>
        <LoginFormIcon />
      </LoginSignupFormTitleAndIcon>
      <LoginSignUpInput
        disableUnderline
        type="text"
        placeholder="البريد الإلكتروني*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <LoginSignUpInput
        disableUnderline
        type="password"
        placeholder="كلمة المرور*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <SubmitButton type="submit">تسجيل الدخول</SubmitButton>
      {isError && (
        <LoginFormErrorMessage>حدث خطأ في التسجيل</LoginFormErrorMessage>
      )}
      <SwitchLoginSignupDiv>
        ليس لديك حساب؟
        <SwitchLoginSignupButton
          disableRipple
          onClick={() => setCurrentForm(LoginSignupForms.SIGNUP)}
        >
          إنشاء حساب
        </SwitchLoginSignupButton>
      </SwitchLoginSignupDiv>
    </LoginSignupFormContainer>
  );
};

export default LoginForm;

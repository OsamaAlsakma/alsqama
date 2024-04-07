import axios from "axios";
import { useState } from "react";
import di from "~/bootstrap/di";
import { SetState } from "~/bootstrap/helper/global-types";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import { LoginSignupForms } from "~/generic/components/login-signup-modal/login-signup-modal";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
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
} from "~/support/login-signup-form/style";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: email,
        password,
      });
      if (response.status === 200) {
        // store the token
        console.log("token", response.data.token);

        setIsOpen(false);
        setEmail("");
        setPassword("");
        setIsError(false);
      }
    } catch (error) {
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
        placeholder="اسم المستخدم*"
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

import axios from "axios";
import { useState } from "react";
import di from "~/bootstrap/di";
import { SetState } from "~/bootstrap/helper/global-types";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import { LoginSignupForms } from "~/generic/components/login-signup-modal/login-signup-modal";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import {
  LoginSignupFormContainer,
  LoginSignupFormTitleAndIcon,
  LoginSignupFormTitle,
  LoginSignUpInput,
  SubmitButton,
  SwitchLoginSignupDiv,
  SwitchLoginSignupButton,
  SignupFormIcon,
  LoginFormErrorMessage,
} from "~/support/login-signup-forms/style";

interface ISignupFormProps {
  setCurrentForm: SetState<LoginSignupForms>;
}

const SignupForm = (props: ISignupFormProps) => {
  const { setCurrentForm } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setIsOpen } = di.resolve(OpenLoginSignUpModalCTX).useContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // post
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: email,
        password,
      });
      if (response.status === 200) {
        console.log("token", response.data.token);

        setIsOpen(false);
        setName("");
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
        <LoginSignupFormTitle>إنشاء حساب جديد</LoginSignupFormTitle>
        <SignupFormIcon />
      </LoginSignupFormTitleAndIcon>
      <LoginSignUpInput
        disableUnderline
        type="text"
        placeholder="الاسم*"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <LoginSignUpInput
        disableUnderline
        type="email"
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
      <SubmitButton type="submit">إنشاء حساب</SubmitButton>
      {isError && (
        <LoginFormErrorMessage>حدث خطأ في التسجيل</LoginFormErrorMessage>
      )}
      <SwitchLoginSignupDiv>
        لديك حساب؟
        <SwitchLoginSignupButton
          disableRipple
          onClick={() => setCurrentForm(LoginSignupForms.LOGIN)}
        >
          تسجيل دخول
        </SwitchLoginSignupButton>
      </SwitchLoginSignupDiv>
    </LoginSignupFormContainer>
  );
};

export default SignupForm;

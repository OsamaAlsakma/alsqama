import axios from "axios";
import { useState } from "react";
import di from "~/bootstrap/di";
import { defaulyPhoneCode } from "~/bootstrap/helper/global-helper";
import { SetState } from "~/bootstrap/helper/global-types";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import { LoginSignupForms } from "~/generic/components/login-signup-button/login-signup-new-button";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import {
  LoginFormErrorMessage,
  LoginSignUpInput,
  LoginSignUpInputPhoneNumber,
  LoginSignupFormContainer,
  LoginSignupFormTitle,
  LoginSignupFormTitleAndIcon,
  SignupFormIcon,
  SubmitButton,
  SwitchLoginSignupButton,
  SwitchLoginSignupDiv,
} from "~/support/login-signup-forms/style";

interface ISignupFormProps {
  setCurrentForm: SetState<LoginSignupForms>;
}

const SignupForm = (props: ISignupFormProps) => {
  const { setCurrentForm } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(defaulyPhoneCode);

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

      {/* Name */}
      <LoginSignUpInput
        disableUnderline
        type="text"
        placeholder="الاسم*"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* Email */}
      <LoginSignUpInput
        disableUnderline
        type="email"
        placeholder="البريد الإلكتروني*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* Phone */}
      <LoginSignUpInputPhoneNumber
        value={phone}
        onChange={(value) => setPhone(value)}
        MenuProps={{ sx: { height: 400 } }}
      />
      {/* password */}
      <LoginSignUpInput
        disableUnderline
        type="password"
        placeholder="كلمة المرور*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {/* password again */}
      <LoginSignUpInput
        disableUnderline
        type="password"
        placeholder="تأكيد كلمة المرور*"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {/*  */}
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

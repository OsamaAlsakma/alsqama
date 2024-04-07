import { useState } from "react";
import { SetState } from "~/bootstrap/helper/global-types";
import { LoginSignupForms } from "~/generic/components/login-signup-modal/login-signup-modal";
import {
  LoginSignupFormContainer,
  LoginSignupFormTitleAndIcon,
  LoginSignupFormTitle,
  LoginSignUpInput,
  SubmitButton,
  SwitchLoginSignupDiv,
  SwitchLoginSignupButton,
  SignupFormIcon,
} from "~/support/login-signup-form/style";

interface ISignupFormProps {
  setCurrentForm: SetState<LoginSignupForms>;
}

const SignupForm = (props: ISignupFormProps) => {
  const { setCurrentForm } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // post
    // validate
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <LoginSignupFormContainer onSubmit={handleSubmit}>
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

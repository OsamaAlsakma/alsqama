import { useState } from "react";
import { SetState } from "~/bootstrap/helper/global-types";
import { LoginSignupForms } from "~/generic/components/login-signup-modal/login-signup-modal";
import {
  LoginSignupFormContainer,
  LoginSignupFormTitleAndIcon,
  LoginSignupFormTitle,
  LoginFormIcon,
  LoginSignUpInput,
  SubmitButton,
  SwitchLoginSignupDiv,
  SwitchLoginSignupButton,
} from "~/support/login-signup-form/style";

interface ILoginFormProps {
  setCurrentForm: SetState<LoginSignupForms>;
}

const LoginForm = (props: ILoginFormProps) => {
  const { setCurrentForm } = props;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // post
    // validate
    setEmail("");
    setPassword("");
  };

  return (
    <LoginSignupFormContainer onSubmit={handleSubmit}>
      <LoginSignupFormTitleAndIcon>
        <LoginSignupFormTitle>تسجيل الدخول</LoginSignupFormTitle>
        <LoginFormIcon />
      </LoginSignupFormTitleAndIcon>
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
      <SubmitButton type="submit">تسجيل الدخول</SubmitButton>
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

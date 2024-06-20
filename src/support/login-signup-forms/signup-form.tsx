import axios from "axios";
import { useState } from "react";
import { endpointsUrl } from "~/bootstrap/helper/endpoints";
import { defaulyPhoneCode } from "~/bootstrap/helper/global-helper";
import { SetState } from "~/bootstrap/helper/global-types";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";
import { LoginSignupForms } from "~/generic/components/login-signup-button/login-signup-new-button";
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
  setShowMessage: SetState<boolean>;
}

const SignupForm = (props: ISignupFormProps) => {
  const { setCurrentForm, setShowMessage } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(defaulyPhoneCode);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(undefined);
    if (password !== confirmPassword) {
      setIsError("كلمة المرور غير متطابقة");
      return;
    }
    setIsLoading(true);
    try {
      // post
      const response = await axios.post(`${endpointsUrl.signupEndpoint}`, {
        name,
        email,
        password,
      });
      if (response.status === 200 || response.status === 201) {
        setShowMessage(true);
        setCurrentForm(LoginSignupForms.LOGIN);
        // setIsOpen(false);
        setName("");
        setEmail("");
        setPassword("");
        setIsError(undefined);
      }
    } catch (error) {
      setIsError("فشل التسجيل، يرجى التاكد من البيانات");
    }
    setIsLoading(false);
  };

  return (
    <>
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
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">إنشاء حساب</SubmitButton>
        {isError && <LoginFormErrorMessage>{isError}</LoginFormErrorMessage>}
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
    </>
  );
};

export default SignupForm;

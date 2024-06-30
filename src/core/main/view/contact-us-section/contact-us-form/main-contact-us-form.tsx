import { useState } from "react";
import {
  MainContactUsFormWrapper,
  StyledMainContactUsForm,
  MainContactUsTitle,
  MainContactUsInput,
  MainContactUsTextField,
  MainContactUsSubmitButton,
} from "~/core/main/view/contact-us-section/contact-us-form/style";

const MainContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  /**
   * @todo add action on click
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <MainContactUsFormWrapper>
      <StyledMainContactUsForm onSubmit={handleSubmit}>
        <MainContactUsTitle>تواصل معنا!</MainContactUsTitle>
        <MainContactUsInput
          type="text"
          placeholder="الاسم*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <MainContactUsInput
          type="email"
          placeholder="البريد الإلكتروني*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <MainContactUsInput
          type="text"
          placeholder="موضوع الرسالة*"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <MainContactUsTextField
          placeholder="أكتب هنا.."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          multiline
          minRows={4}
        />
        <MainContactUsSubmitButton type="submit">
          إرسال
        </MainContactUsSubmitButton>
      </StyledMainContactUsForm>
    </MainContactUsFormWrapper>
  );
};

export default MainContactUsForm;

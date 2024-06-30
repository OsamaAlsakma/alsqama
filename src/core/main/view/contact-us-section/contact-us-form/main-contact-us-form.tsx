import { AlertColor } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import langKey from "~/bootstrap/i18n/langKey";
import {
  MainContactUsFormWrapper,
  StyledMainContactUsForm,
  MainContactUsTitle,
  MainContactUsInput,
  MainContactUsTextField,
  MainContactUsSubmitButton,
} from "~/core/main/view/contact-us-section/contact-us-form/style";
import AlertMessage from "~/generic/components/alert-message/alert-message";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

const MainContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // localization
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messageContent, setMessageContent] = useState<string>(
    t(langKey.detailsPage.successfulPaymentMessage)
  );
  const [messageType, setMessageType] = useState<AlertColor>("success");

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      // post
      const response = await axios.post(`${mainPageEndpointsUrl.contactUs}`, {
        name,
        email,
        subject,
        message,
      });
      if (response.status === 200 || response.status === 201) {
        setMessageContent(t(langKey.detailsPage.successfulPaymentMessage));
        setMessageType("success");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      }
    } catch (error) {
      setMessageType("error");
      setMessageContent(t(langKey.detailsPage.errorPaymentMessage));
    }
    setOpen(true);
    setIsLoading(false);
  };

  return (
    <MainContactUsFormWrapper>
      {isLoading && <CircularLoader />}
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
      <AlertMessage
        durationInMs={4500}
        message={messageContent}
        open={open}
        setOpen={setOpen}
        type={messageType}
      />
    </MainContactUsFormWrapper>
  );
};

export default MainContactUsForm;

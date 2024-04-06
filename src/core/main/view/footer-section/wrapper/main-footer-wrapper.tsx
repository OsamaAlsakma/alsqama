import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  HandlingSectionPaddingWrapper,
  StyledAppDivider,
} from "~/bootstrap/helper/global-styles";
import {
  FooterIconsWrapper,
  MainFooter,
  MainFooterLogoAndServices,
  MainFooterMainService,
  MainFooterMainServices,
  StyleMainLogo,
} from "~/core/main/view/footer-section/wrapper/style";
import LoginSignupButton from "~/generic/components/login-signup-button/login-signup-button";

const MainFooterWrapper = () => {
  const iconsDimensions = {
    width: "32px",
    height: "32px",
  };

  // whatsapp
  const whatsappPhoneNumber = "+79214490788";
  const whatsappURL = `https://wa.me/${whatsappPhoneNumber}`;

  // Email
  const recipientEmail = "salar.sali97@gmail.com";
  const subject = "Subject of the email";
  const body = "Body of the email";
  const mailtoURL = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <HandlingSectionPaddingWrapper>
      <MainFooterLogoAndServices>
        <StyleMainLogo to={servicesPageEndpoint.chalets}>حجزي</StyleMainLogo>
        <MainFooterMainServices style={{ display: "flex", gap: "12px" }}>
          <MainFooterMainService to={servicesPageEndpoint.hotels}>
            فنادق
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.chalets}>
            شاليهات
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.halls}>
            صالات.أفراح
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.resorts}>
            منتجعات
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.resorts}>
            شروط الاستخدام
          </MainFooterMainService>
        </MainFooterMainServices>
      </MainFooterLogoAndServices>
      <StyledAppDivider />
      <MainFooter>
        <div style={{ fontSize: "18px" }}>
          جميع الحقوق محفوظة © 2016-2024 حجزي
        </div>
        <LoginSignupButton />
        <FooterIconsWrapper>
          <MainFooterMainService
            to={"https://www.facebook.com/profile.php?id=100035171442539"}
            target="_blank"
          >
            <FacebookRoundedIcon style={{ ...iconsDimensions }} />
          </MainFooterMainService>
          <MainFooterMainService to={"https://t.me/OSAMA_AYLA"} target="_blank">
            <TelegramIcon style={{ ...iconsDimensions }} />
          </MainFooterMainService>
          <MainFooterMainService to={whatsappURL} target="_blank">
            <WhatsAppIcon style={{ ...iconsDimensions }} />
          </MainFooterMainService>
          <MainFooterMainService to={mailtoURL} target="_blank">
            <MailRoundedIcon style={{ ...iconsDimensions }} />
          </MainFooterMainService>
        </FooterIconsWrapper>
      </MainFooter>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainFooterWrapper;

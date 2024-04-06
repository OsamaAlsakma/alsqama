import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styled from "styled-components";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import * as palette from "~/bootstrap/helper/global-helper";
import {
  HandlingSectionPaddingWrapper,
  StyledAppDivider,
} from "~/bootstrap/helper/global-styles";
import LoginSignupButton from "~/generic/components/login-signup-button/login-signup-button";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";

const MainFooterLogoAndServices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (max-width: ${palette.smallScreenSize}) {
    flex-direction: column;
    align-items: start;
  }
`;

const StyleMainLogo = styled(StyledMainServicesLink)`
  && {
    font-size: 32px;
    width: fit-content;
    color: inherit;
  }
`;

const MainFooterMainServices = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const MainFooterMainService = styled(StyledMainServicesLink)`
  && {
    color: inherit;
    font-size: 18px;
  }
`;

const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${palette.smallScreenSize}) {
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }
`;

const FooterIconsWrapper = styled.div`
  display: flex;
  align-content: center;
  gap: 8px;
  padding-top: 8px;
`;

const MainFooterWrapper = () => {
  const iconsDimensions = {
    width: "32px",
    height: "32px",
  };

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
          <MainFooterMainService
            to={"https://www.facebook.com/profile.php?id=100035171442539"}
            target="_blank"
          >
            <TelegramIcon style={{ ...iconsDimensions }} />
          </MainFooterMainService>
          <WhatsAppIcon style={{ ...iconsDimensions }} />
          <MailRoundedIcon style={{ ...iconsDimensions }} />
        </FooterIconsWrapper>
      </MainFooter>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainFooterWrapper;

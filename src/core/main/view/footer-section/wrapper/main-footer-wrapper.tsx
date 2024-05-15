import { useTranslation } from "react-i18next";
import {
  servicesPageEndpoint,
  supportEndpoint,
} from "~/bootstrap/helper/endpoints";
import {
  HandlingSectionPaddingWrapper,
  StyledAppDivider,
} from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import MainFooterIcons from "~/core/main/view/footer-section/footer-icons/main-footer-icons";
import {
  CopyrightNotice,
  MainFooter,
  MainFooterLogoAndServices,
  MainFooterMainService,
  MainFooterMainServices,
  StyleMainLogo,
} from "~/core/main/view/footer-section/wrapper/style";
import LoginSignupButton from "~/generic/components/login-signup-button/login-signup-button";

const MainFooterWrapper = () => {
  const scrollToTopOnClickOnLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();

  return (
    <HandlingSectionPaddingWrapper>
      <MainFooterLogoAndServices>
        <StyleMainLogo
          to={servicesPageEndpoint.main}
          onClick={scrollToTopOnClickOnLogo}
        >
          حجزي
        </StyleMainLogo>
        <MainFooterMainServices>
          <MainFooterMainService to={servicesPageEndpoint.hotels}>
            {t(langKey.global.hotels)}
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.chalets}>
            {t(langKey.global.chalets)}
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.halls}>
            {t(langKey.global.halls)}
          </MainFooterMainService>
          <MainFooterMainService to={servicesPageEndpoint.apartments}>
            {t(langKey.global.apartments)}
          </MainFooterMainService>
          <MainFooterMainService to={supportEndpoint.termsOfUse}>
            شروط الاستخدام
          </MainFooterMainService>
        </MainFooterMainServices>
      </MainFooterLogoAndServices>
      <StyledAppDivider />
      <MainFooter>
        <CopyrightNotice>جميع الحقوق محفوظة © 2016-2024 حجزي</CopyrightNotice>
        <LoginSignupButton />
        <MainFooterIcons />
      </MainFooter>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainFooterWrapper;

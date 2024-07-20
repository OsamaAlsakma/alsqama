import { useTranslation } from "react-i18next";
import di from "~/bootstrap/di";
import {
  servicesPageEndpoint,
  supportEndpoint,
} from "~/bootstrap/helper/endpoints";
import {
  HandlingSectionPaddingWrapper,
  StyledAppDivider,
} from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import {
  CopyrightNotice,
  MainFooter,
  MainFooterLogoAndServices,
  MainFooterMainService,
  MainFooterMainServices,
  StyleMainLogo,
} from "~/core/main/view/footer-section/wrapper/style";
import LoginSignupButton from "~/generic/components/login-signup-button/login-signup-button";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";
import ServicesBurgerDrawerContactUsIcons from "~/support/header/services-burger/services-burger-drawer-contact-us-icons";

const MainFooterWrapper = () => {
  const scrollToTopOnClickOnLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();
  const { changeSelectedTab } = di.resolve(SelectedTabCTX).useContext();

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
          <MainFooterMainService
            to={servicesPageEndpoint.hotels}
            onClick={() => changeSelectedTab(PossibleSelectedTabs.HOTEL)}
          >
            {t(langKey.global.hotels)}
          </MainFooterMainService>
          <MainFooterMainService
            to={servicesPageEndpoint.chalets}
            onClick={() => changeSelectedTab(PossibleSelectedTabs.CHALET)}
          >
            {t(langKey.global.chalets)}
          </MainFooterMainService>
          <MainFooterMainService
            to={servicesPageEndpoint.halls}
            onClick={() => changeSelectedTab(PossibleSelectedTabs.HALL)}
          >
            {t(langKey.global.halls)}
          </MainFooterMainService>
          <MainFooterMainService
            to={servicesPageEndpoint.appartments}
            onClick={() => changeSelectedTab(PossibleSelectedTabs.APPARTMENT)}
          >
            {t(langKey.global.apartments)}
          </MainFooterMainService>
          <MainFooterMainService
            to={supportEndpoint.termsOfUse}
            onClick={() => changeSelectedTab(PossibleSelectedTabs.TERMSOFUSE)}
          >
            {t(langKey.support.termsOfUse)}
          </MainFooterMainService>
          <MainFooterMainService to={supportEndpoint.privacyPolicy}>
            {t(langKey.support.privacyPolicy)}
          </MainFooterMainService>
        </MainFooterMainServices>
      </MainFooterLogoAndServices>
      <StyledAppDivider />
      <MainFooter>
        <CopyrightNotice>{t(langKey.global.copyRight)}</CopyrightNotice>
        <LoginSignupButton />
        <ServicesBurgerDrawerContactUsIcons />
      </MainFooter>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainFooterWrapper;

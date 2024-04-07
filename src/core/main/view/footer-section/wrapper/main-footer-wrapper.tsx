import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  HandlingSectionPaddingWrapper,
  StyledAppDivider,
} from "~/bootstrap/helper/global-styles";
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
  return (
    <HandlingSectionPaddingWrapper>
      <MainFooterLogoAndServices>
        <StyleMainLogo to={servicesPageEndpoint.main}>حجزي</StyleMainLogo>
        <MainFooterMainServices>
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
        <CopyrightNotice>جميع الحقوق محفوظة © 2016-2024 حجزي</CopyrightNotice>
        <LoginSignupButton />
        <MainFooterIcons />
      </MainFooter>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainFooterWrapper;
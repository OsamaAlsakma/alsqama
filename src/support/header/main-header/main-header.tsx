import di from "~/bootstrap/di";
import LoginSignupButton from "~/generic/components/login-signup-button/login-signup-button";
import LoginSignupModal from "~/generic/components/login-signup-modal/login-signup-modal";
import MainLogo from "~/generic/components/main-logo/main-logo";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import HeaderLocalizationSelectBox from "~/support/header/localization-select-box/header-localization-select-box";
import {
  StyledMainHeader,
  StyledLocalizationAndLoginSignup,
} from "~/support/header/main-header/style";
import HeaderTabs from "~/support/header/tabs/header-tabs";

const MainHeader = () => {
  const { Provider: OpenModlaProvider } = di.resolve(OpenLoginSignUpModalCTX);
  return (
    <StyledMainHeader>
      <MainLogo />
      <HeaderTabs />
      <StyledLocalizationAndLoginSignup>
        <HeaderLocalizationSelectBox />
        <OpenModlaProvider>
          <LoginSignupButton />
          <LoginSignupModal />
        </OpenModlaProvider>
      </StyledLocalizationAndLoginSignup>
    </StyledMainHeader>
  );
};

export default MainHeader;

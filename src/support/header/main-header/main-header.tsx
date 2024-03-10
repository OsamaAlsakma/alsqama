import LoginSignupButton from "../../../generic/components/login-signup-button/login-signup-button";
import MainLogo from "../../../generic/components/main-logo/main-logo";
import HeaderLocalizationSelectBox from "../localization-select-box/header-localization-select-box";
import HeaderTabs from "../tabs/header-tabs";
import { StyledLocalizationAndLoginSignup, StyledMainHeader } from "./style";

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <MainLogo />
      <HeaderTabs />
      <StyledLocalizationAndLoginSignup>
        <HeaderLocalizationSelectBox />
        <LoginSignupButton />
      </StyledLocalizationAndLoginSignup>
    </StyledMainHeader>
  );
};

export default MainHeader;

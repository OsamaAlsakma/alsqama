import MainLogo from "../../../generic/components/main-logo/main-logo";
import HeaderLocalizationSelectBox from "../localization-select-box/header-localization-select-box";
import HeaderTabs from "../tabs/header-tabs";
import { StyledMainHeader } from "./style";

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <MainLogo />
      <HeaderTabs />
      <HeaderLocalizationSelectBox />
    </StyledMainHeader>
  );
};

export default MainHeader;

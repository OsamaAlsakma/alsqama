import MainLogo from "../../../generic/components/main-logo/main-logo";
import HeaderTabs from "../tabs/header-tabs";
import { StyledMainHeader } from "./style";

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <MainLogo />
      <HeaderTabs />
    </StyledMainHeader>
  );
};

export default MainHeader;

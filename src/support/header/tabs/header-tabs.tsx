import MainServicesHotelsButton from "../../../generic/components/main-services/hotels-button/main-services-hotels-button";
import MainServicesChaletsButton from "../../../generic/components/main-services/chalets-button/main-services-chalets-button";
import MainServicesHallsButton from "../../../generic/components/main-services/halls-button/main-services-halls-button";
import { StyledHeaderTabs } from "./style";
import MainServicesResortsButton from "../../../generic/components/main-services/resorts-button/main-services-resorts-button";

const HeaderTabs = () => {
  return (
    <StyledHeaderTabs>
      <MainServicesHotelsButton />
      <MainServicesChaletsButton />
      <MainServicesHallsButton />
      <MainServicesResortsButton />
    </StyledHeaderTabs>
  );
};

export default HeaderTabs;

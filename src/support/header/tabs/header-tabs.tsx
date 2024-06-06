import MainServicesChaletsButton from "~/generic/components/main-services/chalets-button/main-services-chalets-button";
import MainServicesHallsButton from "~/generic/components/main-services/halls-button/main-services-halls-button";
import MainServicesHotelsButton from "~/generic/components/main-services/hotels-button/main-services-hotels-button";
import MainServicesResortsButton from "~/generic/components/main-services/resorts-button/main-services-resorts-button";
import MainServicesTermsOfUseButton from "~/generic/components/main-services/terms-of-use/main-services-terms-of-use-button";
import { StyledHeaderTabs } from "./style";
import di from "~/bootstrap/di";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";

export interface HeaderSelectedTabProps {
  selectedTab: PossibleSelectedTabs | undefined;
}

const HeaderTabs = () => {
  const { selectedTab } = di.resolve(SelectedTabCTX).useContext();
  return (
    <StyledHeaderTabs>
      <MainServicesHotelsButton selectedTab={selectedTab} />
      <MainServicesChaletsButton selectedTab={selectedTab} />
      <MainServicesHallsButton selectedTab={selectedTab} />
      <MainServicesResortsButton selectedTab={selectedTab} />
      <MainServicesTermsOfUseButton selectedTab={selectedTab} />
    </StyledHeaderTabs>
  );
};

export default HeaderTabs;

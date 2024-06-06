import MainServicesChaletsButton from "~/generic/components/main-services/chalets-button/main-services-chalets-button";
import MainServicesHallsButton from "~/generic/components/main-services/halls-button/main-services-halls-button";
import MainServicesHotelsButton from "~/generic/components/main-services/hotels-button/main-services-hotels-button";
import MainServicesResortsButton from "~/generic/components/main-services/resorts-button/main-services-resorts-button";
import MainServicesTermsOfUseButton from "~/generic/components/main-services/terms-of-use/main-services-terms-of-use-button";
import { StyledHeaderTabs } from "./style";

const HeaderTabs = () => {
  return (
    <StyledHeaderTabs>
      <MainServicesHotelsButton />
      <MainServicesChaletsButton />
      <MainServicesHallsButton />
      <MainServicesResortsButton />
      <MainServicesTermsOfUseButton />
    </StyledHeaderTabs>
  );
};

export default HeaderTabs;

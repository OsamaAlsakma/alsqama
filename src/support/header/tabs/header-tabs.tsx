import styled from "styled-components";
import MainServicesHotelsButton from "../../../generic/components/main-services/hotels-button/main-services-hotels-button";
import MainServicesChaletsButton from "../../../generic/components/main-services/chalets-button/main-services-chalets-button";
import MainServicesHallsButton from "../../../generic/components/main-services/halls-button/main-services-halls-button";

export const StyledHeaderTabs = styled.div`
  font-size: 18px;
`;

const HeaderTabs = () => {
  return (
    <StyledHeaderTabs>
      <MainServicesHotelsButton />
      <MainServicesChaletsButton />
      <MainServicesHallsButton />
    </StyledHeaderTabs>
  );
};

export default HeaderTabs;

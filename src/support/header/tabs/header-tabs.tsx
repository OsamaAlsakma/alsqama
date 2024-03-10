import styled from "styled-components";
import MainServicesHotelsButton from "../../../generic/components/main-services/hotels-button/main-services-hotels-button";
import MainServicesChaletsButton from "../../../generic/components/main-services/chalets-button/main-services-chalets-button";

export const StyledHeaderTabs = styled.div`
  font-size: 18px;
`;

const HeaderTabs = () => {
  return (
    <StyledHeaderTabs>
      <MainServicesHotelsButton />
      <MainServicesChaletsButton />
    </StyledHeaderTabs>
  );
};

export default HeaderTabs;

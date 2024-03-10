import { servicesPageEndpoint } from "../../../../bootstrap/helper/endpoints";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesHotelsButtonVM from "./main-services-hotels-button-vm";

const MainServicesHotelsButton = () => {
  const vm = new MainServicesHotelsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={servicesPageEndpoint.hotels}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesHotelsButton;

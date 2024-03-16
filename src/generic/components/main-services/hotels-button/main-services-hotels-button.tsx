import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import MainServicesHotelsButtonVM from "~/generic/components/main-services/hotels-button/main-services-hotels-button-vm";
import {
  StyledMainServicesLink,
  StyledMainServicesAppButton,
} from "~/generic/components/main-services/style";

const MainServicesHotelsButton = () => {
  const vm = new MainServicesHotelsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={servicesPageEndpoint.hotels}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesHotelsButton;

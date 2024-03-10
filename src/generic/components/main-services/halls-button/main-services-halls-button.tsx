import { servicesPageEndpoint } from "../../../../bootstrap/helper/endpoints";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesHallsButtonVM from "./main-services-halls-button-vm";

const MainServicesHallsButton = () => {
  const vm = new MainServicesHallsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={servicesPageEndpoint.halls}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesHallsButton;

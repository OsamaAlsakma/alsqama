import { servicesPageEndpoint } from "../../../../bootstrap/helper/endpoints";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesResortsButtonVM from "./main-services-resorts-button-vm";

const MainServicesResortsButton = () => {
  const vm = new MainServicesResortsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={servicesPageEndpoint.retreats}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesResortsButton;

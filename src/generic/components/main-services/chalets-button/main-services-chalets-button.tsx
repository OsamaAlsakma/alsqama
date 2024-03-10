import MainServicesChaletsButtonVM from "./main-services-chalets-button-vm";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import { servicesPageEndpoint } from "../../../../bootstrap/helper/endpoints";

const MainServicesChaletsButton = () => {
  const vm = new MainServicesChaletsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={servicesPageEndpoint.chalets}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesChaletsButton;

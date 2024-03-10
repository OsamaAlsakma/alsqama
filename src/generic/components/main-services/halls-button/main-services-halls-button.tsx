import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesHallsButtonVM from "./main-services-halls-button-vm";

const MainServicesHallsButton = () => {
  const vm = new MainServicesHallsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={"/halls"}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesHallsButton;

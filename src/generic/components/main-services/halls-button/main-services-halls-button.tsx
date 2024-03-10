import { StyledMainServicesAppButton } from "../style";
import MainServicesHallsButtonVM from "./main-services-halls-button-vm";

const MainServicesHallsButton = () => {
  const vm = new MainServicesHallsButtonVM().useVM();
  return <StyledMainServicesAppButton vm={vm} />;
};

export default MainServicesHallsButton;

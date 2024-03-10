import { StyledMainServicesAppButton } from "../style";
import MainServicesHotelsButtonVM from "./main-services-hotels-button-vm";

const MainServicesHotelsButton = () => {
  const vm = new MainServicesHotelsButtonVM().useVM();
  return <StyledMainServicesAppButton vm={vm} />;
};

export default MainServicesHotelsButton;

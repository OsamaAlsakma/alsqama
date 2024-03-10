import HotelsButtonVM from "./main-services-hotels-button-vm";
import { StyledMainServicesAppButton } from "../style";

const MainServicesHotelsButton = () => {
  const vm = new HotelsButtonVM().useVM();
  return <StyledMainServicesAppButton vm={vm} />;
};

export default MainServicesHotelsButton;

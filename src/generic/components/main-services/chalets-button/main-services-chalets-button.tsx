import MainServicesChaletsButtonVM from "./main-services-chalets-button-vm";
import { StyledMainServicesAppButton } from "../style";

const MainServicesChaletsButton = () => {
  const vm = new MainServicesChaletsButtonVM().useVM();
  return <StyledMainServicesAppButton vm={vm} />;
};

export default MainServicesChaletsButton;

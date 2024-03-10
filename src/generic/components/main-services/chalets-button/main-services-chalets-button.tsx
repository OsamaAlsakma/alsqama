import MainServicesChaletsButtonVM from "./main-services-chalets-button-vm";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";

const MainServicesChaletsButton = () => {
  const vm = new MainServicesChaletsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={"/chalets"}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesChaletsButton;

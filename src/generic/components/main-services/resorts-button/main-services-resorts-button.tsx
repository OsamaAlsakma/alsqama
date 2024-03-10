import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesResortsButtonVM from "./main-services-resorts-button-vm";

const MainServicesResortsButton = () => {
  const vm = new MainServicesResortsButtonVM().useVM();
  return (
    <StyledMainServicesLink to={"/resorts"}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesResortsButton;

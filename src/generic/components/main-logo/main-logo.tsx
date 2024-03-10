import { servicesPageEndpoint } from "../../../bootstrap/helper/endpoints";
import { StyledMainLogo } from "./style";

const MainLogo = () => {
  return <StyledMainLogo to={servicesPageEndpoint.main}>حجزي</StyledMainLogo>;
};

export default MainLogo;

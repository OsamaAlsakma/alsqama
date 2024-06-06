import di from "~/bootstrap/di";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesHallsButtonVM from "./main-services-halls-button-vm";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { HeaderSelectedTabProps } from "~/support/header/tabs/header-tabs";

const MainServicesHallsButton = (props: HeaderSelectedTabProps) => {
  const vm = di.resolve(MainServicesHallsButtonVM).useVM();
  const isSelected = props.selectedTab === vm.props.href;

  return (
    <StyledMainServicesLink to={servicesPageEndpoint.halls}>
      <StyledMainServicesAppButton isSelected={isSelected} vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesHallsButton;

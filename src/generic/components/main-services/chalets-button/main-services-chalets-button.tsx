import MainServicesChaletsButtonVM from "./main-services-chalets-button-vm";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import di from "~/bootstrap/di";
import { HeaderSelectedTabProps } from "~/support/header/tabs/header-tabs";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";

const MainServicesChaletsButton = (props: HeaderSelectedTabProps) => {
  const vm = di.resolve(MainServicesChaletsButtonVM).useVM();
  const isSelected = props.selectedTab === vm.props.href;

  return (
    <StyledMainServicesLink to={servicesPageEndpoint.chalets}>
      <StyledMainServicesAppButton $isSelected={isSelected} vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesChaletsButton;

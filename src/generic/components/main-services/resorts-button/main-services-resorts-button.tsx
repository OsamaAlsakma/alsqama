import di from "~/bootstrap/di";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesResortsButtonVM from "./main-services-resorts-button-vm";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { HeaderSelectedTabProps } from "~/support/header/tabs/header-tabs";

const MainServicesResortsButton = (props: HeaderSelectedTabProps) => {
  const vm = di.resolve(MainServicesResortsButtonVM).useVM();
  const isSelected = props.selectedTab === vm.props.href;

  return (
    <StyledMainServicesLink to={servicesPageEndpoint.appartments}>
      <StyledMainServicesAppButton $isSelected={isSelected} vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesResortsButton;

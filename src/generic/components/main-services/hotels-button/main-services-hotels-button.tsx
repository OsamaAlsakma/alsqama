import di from "~/bootstrap/di";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import MainServicesHotelsButtonVM from "~/generic/components/main-services/hotels-button/main-services-hotels-button-vm";
import {
  StyledMainServicesAppButton,
  StyledMainServicesLink,
} from "~/generic/components/main-services/style";
import { HeaderSelectedTabProps } from "~/support/header/tabs/header-tabs";

const MainServicesHotelsButton = (props: HeaderSelectedTabProps) => {
  const vm = di.resolve(MainServicesHotelsButtonVM).useVM();
  const isSelected = props.selectedTab === vm.props.href;
  return (
    <StyledMainServicesLink to={servicesPageEndpoint.hotels}>
      <StyledMainServicesAppButton isSelected={isSelected} vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesHotelsButton;

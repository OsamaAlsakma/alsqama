import { supportEndpoint } from "~/bootstrap/helper/endpoints";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesTermsOfUseButtonVM from "~/generic/components/main-services/terms-of-use/main-services-terms-of-use-button-vm";
import di from "~/bootstrap/di";
import { HeaderSelectedTabProps } from "~/support/header/tabs/header-tabs";

const MainServicesTermsOfUseButton = (props: HeaderSelectedTabProps) => {
  const vm = di.resolve(MainServicesTermsOfUseButtonVM).useVM();
  const isSelected = props.selectedTab === vm.props.href;

  return (
    <StyledMainServicesLink to={supportEndpoint.termsOfUse}>
      <StyledMainServicesAppButton isSelected={isSelected} vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesTermsOfUseButton;

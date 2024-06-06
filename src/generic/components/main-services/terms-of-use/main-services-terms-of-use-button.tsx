import { supportEndpoint } from "~/bootstrap/helper/endpoints";
import { StyledMainServicesAppButton, StyledMainServicesLink } from "../style";
import MainServicesTermsOfUseButtonVM from "~/generic/components/main-services/terms-of-use/main-services-terms-of-use-button-vm";

const MainServicesTermsOfUseButton = () => {
  const vm = new MainServicesTermsOfUseButtonVM().useVM();
  return (
    <StyledMainServicesLink to={supportEndpoint.termsOfUse}>
      <StyledMainServicesAppButton vm={vm} />
    </StyledMainServicesLink>
  );
};

export default MainServicesTermsOfUseButton;

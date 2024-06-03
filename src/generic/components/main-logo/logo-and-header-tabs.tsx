import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  StyledMainLogo,
  StyledMainLogoImage,
} from "~/generic/components/main-logo/style";
import HeaderTabs from "~/support/header/tabs/header-tabs";

const LogoAndHeaderTabs = () => {
  return (
    <>
      <StyledMainLogo to={servicesPageEndpoint.main}>
        <StyledMainLogoImage
          src={`${import.meta.env.BASE_URL}/icons/svg-logo.svg`}
        />
      </StyledMainLogo>
      <HeaderTabs />
    </>
  );
};

export default LogoAndHeaderTabs;

import di from "~/bootstrap/di";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  StyledMainLogo,
  StyledMainLogoImage,
} from "~/generic/components/main-logo/style";
import SelectedTabCTX from "~/generic/context/selected-tab-ctx";
import HeaderTabs from "~/support/header/tabs/header-tabs";

const LogoAndHeaderTabs = () => {
  const { changeSelectedTab } = di.resolve(SelectedTabCTX).useContext();
  return (
    <>
      <StyledMainLogo
        onClick={() => {
          changeSelectedTab(undefined);
        }}
        to={servicesPageEndpoint.main}
      >
        <StyledMainLogoImage src={`/icons/svg-logo.svg`} />
      </StyledMainLogo>
      <HeaderTabs />
    </>
  );
};

export default LogoAndHeaderTabs;

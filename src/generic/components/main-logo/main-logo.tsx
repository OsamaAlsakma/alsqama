import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  StyledMainLogo,
  StyledMainLogoImage,
} from "~/generic/components/main-logo/style";

const MainLogo = () => {
  return (
    <StyledMainLogo to={servicesPageEndpoint.main}>
      <StyledMainLogoImage
        src={`${import.meta.env.BASE_URL}/assets/main-logo.png`}
      />
    </StyledMainLogo>
  );
};

export default MainLogo;

import { Button } from "@mui/material";
import { StyledHeaderTabs } from "./style";
import MainServicesChaletsButton from "~/generic/components/main-services/chalets-button/main-services-chalets-button";
import MainServicesHallsButton from "~/generic/components/main-services/halls-button/main-services-halls-button";
import MainServicesHotelsButton from "~/generic/components/main-services/hotels-button/main-services-hotels-button";
import MainServicesResortsButton from "~/generic/components/main-services/resorts-button/main-services-resorts-button";
import { mainFontFamily } from "~/bootstrap/helper/global-helper";

const HeaderTabs = () => {
  return (
    <StyledHeaderTabs>
      <MainServicesHotelsButton />
      <MainServicesChaletsButton />
      <MainServicesHallsButton />
      <MainServicesResortsButton />
      <Button
        style={{
          fontSize: "22px",
          fontFamily: `${mainFontFamily}`,
          color: "black",
        }}
      >
        تواصل معنا
      </Button>
    </StyledHeaderTabs>
  );
};

export default HeaderTabs;

import {
  HandlingSectionPaddingWrapper,
  StyledAppTitleWrapper,
} from "~/bootstrap/helper/global-styles";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import {
  StyledMainOurServicesWrapper,
  StyledMainOurServicesCard,
  StyledMainOurServicesCardIcon,
  StyledMainOurServicesCardTitle,
  StyledMainOurServicesCardTitleAnddescription,
} from "~/core/main/view/our-services-section/wrapper/style";
import { useEffect, useState } from "react";
import axios from "axios";
import { mainPageEndpointsUrl } from "~/bootstrap/helper/endpoints";
import CircularLoader from "~/generic/components/circular-loader/circular-loader";

interface MainOurServicesCard {
  id: string;
  title: string;
  description?: string;
}

const MainOurServicesWrapper = () => {
  // get the data
  const [mainOurServices, setMainOurServices] = useState<MainOurServicesCard[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const fetchMainPageSlidesData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${mainPageEndpointsUrl.mainPageOurServices}`
      );
      if (response.status === 200) {
        const ourServices: MainOurServicesCard[] = response.data;
        setMainOurServices(ourServices);
      }
    } catch (errro) {
      throw Error("failed to load images..");
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchMainPageSlidesData();
  }, []);

  if (isLoading) return <CircularLoader />;
  if (mainOurServices.length === 0) return null;
  return (
    <HandlingSectionPaddingWrapper>
      <StyledAppTitleWrapper>ما هي الخدمات التي نقدمها</StyledAppTitleWrapper>
      <StyledMainOurServicesWrapper>
        {mainOurServices.map((service, index) => (
          <StyledMainOurServicesCard key={index}>
            <StyledMainOurServicesCardIcon component={MilitaryTechIcon} />
            <StyledMainOurServicesCardTitleAnddescription>
              <StyledMainOurServicesCardTitle>
                {service.title}
              </StyledMainOurServicesCardTitle>
              <span>{service.description}</span>
            </StyledMainOurServicesCardTitleAnddescription>
          </StyledMainOurServicesCard>
        ))}
      </StyledMainOurServicesWrapper>
    </HandlingSectionPaddingWrapper>
  );
};

export default MainOurServicesWrapper;

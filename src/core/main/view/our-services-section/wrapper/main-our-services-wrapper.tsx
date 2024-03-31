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

interface IMainOurServicesCardProps {
  title: string;
  description?: string;
}
const mainOurServices: IMainOurServicesCardProps[] = [
  {
    title: "حجز بيتك حجز فوري ومضمون",
    description: "حجز بيتك حجز فوري ومضمون",
  },

  {
    title: "حجز بيتك حجز فوري ومضمون",
    description: "حجز بيتك حجز فوري ومضمون",
  },

  {
    title: "حجز بيتك حجز فوري ومضمون",
    description: "حجز بيتك حجز فوري ومضمون",
  },

  {
    title: "حجز بيتك حجز فوري ومضمون",
    description: "حجز بيتك حجز فوري ومضمون",
  },
];

const MainOurServicesWrapper = () => {
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

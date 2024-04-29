import { StyledAppSubTitleWrapper } from "~/bootstrap/helper/global-styles";
import {
  DetailsInfoTabsFeatureIcon,
  DetailsInfoTabsFeatureWrapper,
} from "~/core/chalets/view/details-section/info-tabs-and-booking-card-section/info-tabs/style";

interface IChaletsDetailsInfoTabsMapProps {
  features: string[];
}

const ChaletsDetailsInfoTabsfeatures = (
  props: IChaletsDetailsInfoTabsMapProps
) => {
  const { features } = props;

  return (
    <>
      <StyledAppSubTitleWrapper>ميزات وملحقات</StyledAppSubTitleWrapper>
      {features.map((feature, index) => (
        <DetailsInfoTabsFeatureWrapper key={index}>
          <DetailsInfoTabsFeatureIcon /> {feature}
        </DetailsInfoTabsFeatureWrapper>
      ))}
    </>
  );
};

export default ChaletsDetailsInfoTabsfeatures;

import {
  DetailsInfoTabsFeatureIcon,
  DetailsInfoTabsFeatureWrapper,
  StyledInfoTabTitle,
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
      <StyledInfoTabTitle>ميزات وملحقات</StyledInfoTabTitle>
      {features.map((feature) => (
        <DetailsInfoTabsFeatureWrapper>
          <DetailsInfoTabsFeatureIcon /> {feature}
        </DetailsInfoTabsFeatureWrapper>
      ))}
    </>
  );
};

export default ChaletsDetailsInfoTabsfeatures;

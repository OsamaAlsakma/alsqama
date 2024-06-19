import { useTranslation } from "react-i18next";
import { StyledAppSubTitleWrapper } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
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
  const { t } = useTranslation();
  return (
    <>
      <StyledAppSubTitleWrapper>
        {t(langKey.detailsPage.featuresAccessories)}
      </StyledAppSubTitleWrapper>
      {features.map((feature, index) => (
        <DetailsInfoTabsFeatureWrapper key={index}>
          <DetailsInfoTabsFeatureIcon /> {feature}
        </DetailsInfoTabsFeatureWrapper>
      ))}
    </>
  );
};

export default ChaletsDetailsInfoTabsfeatures;

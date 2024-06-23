import { useTranslation } from "react-i18next";
import { StyledAppSubTitleWrapper } from "~/bootstrap/helper/global-styles";
import langKey from "~/bootstrap/i18n/langKey";
import {
  BookingCancelingConditionsEdgeCase,
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
      {features.length !== 0 ? (
        features.map((feature, index) => (
          <DetailsInfoTabsFeatureWrapper key={index}>
            <DetailsInfoTabsFeatureIcon /> {feature}
          </DetailsInfoTabsFeatureWrapper>
        ))
      ) : (
        <BookingCancelingConditionsEdgeCase>
          {t(langKey.detailsPage.noFeaturesToShow)}
        </BookingCancelingConditionsEdgeCase>
      )}
    </>
  );
};

export default ChaletsDetailsInfoTabsfeatures;

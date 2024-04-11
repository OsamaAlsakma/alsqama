import {
  ChaletsCardsCardFeaturesWrapper,
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";
import PlaceIcon from "@mui/icons-material/Place";

const ChaletsCardsCardBody = () => {
  return (
    <ChaletsCardsCardFeaturesWrapper>
      <ChaletsCardsCardFeature>
        <PlaceIcon />
        <ChaletsCardsCardFeatureTitle>
          عدن، شارع خالد أبن الوليد
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/money.svg" alt="money" />
        <ChaletsCardsCardFeatureTitle>
          20دولار \ ليلة
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/rooms.svg" alt="rooms" />
        <ChaletsCardsCardFeatureTitle>5 غرف</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/calender.svg" alt="rooms" />
        <ChaletsCardsCardFeatureTitle>4 أيلول</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default ChaletsCardsCardBody;

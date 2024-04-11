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
          عدن، شارع الأطفال
        </ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/money.svg" alt="money" />
        <ChaletsCardsCardFeatureTitle>test2</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/rooms.svg" alt="rooms" />
        <ChaletsCardsCardFeatureTitle>test3</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
      <ChaletsCardsCardFeature>
        <ChaletsCardsCardFeatureIcon src="./icons/calender.svg" alt="rooms" />
        <ChaletsCardsCardFeatureTitle>test4</ChaletsCardsCardFeatureTitle>
      </ChaletsCardsCardFeature>
    </ChaletsCardsCardFeaturesWrapper>
  );
};

export default ChaletsCardsCardBody;

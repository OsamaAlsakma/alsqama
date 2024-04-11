import PlaceIcon from "@mui/icons-material/Place";
import CardContent from "@mui/material/CardContent/CardContent";
import image1 from "../../../../../../public/assets/1.jpg";
import {
  StyledChaletsCardsCard,
  StyledChaletsCardsCardMedia,
  ChaletsCardsCardTitleWrapper,
  ChaletsCardsCardTitle,
  ChaletsCardsCardRatingWrapper,
  ChaletsCardsCardStarIcon,
  ChaletsCardsCardRatingStars,
  ChaletsCardsCardFeaturesWrapper,
  ChaletsCardsCardFeature,
  ChaletsCardsCardFeatureTitle,
  ChaletsCardsCardFeatureIcon,
  ChaletsCardsCardActions,
  ChaletsCardsCardActionsButton,
} from "~/core/chalets/view/cards-section/card/style";

const ChaletsCardsCard = () => {
  return (
    <StyledChaletsCardsCard>
      {/* image */}
      <StyledChaletsCardsCardMedia image={image1} />
      <CardContent>
        {/* title */}
        <ChaletsCardsCardTitleWrapper>
          <ChaletsCardsCardTitle>شاليه الوادي</ChaletsCardsCardTitle>
          <ChaletsCardsCardRatingWrapper>
            <ChaletsCardsCardStarIcon />
            <ChaletsCardsCardRatingStars>4.5</ChaletsCardsCardRatingStars>
          </ChaletsCardsCardRatingWrapper>
        </ChaletsCardsCardTitleWrapper>
        {/* body */}
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
            <ChaletsCardsCardFeatureIcon
              src="./icons/calender.svg"
              alt="rooms"
            />
            <ChaletsCardsCardFeatureTitle>test4</ChaletsCardsCardFeatureTitle>
          </ChaletsCardsCardFeature>
        </ChaletsCardsCardFeaturesWrapper>
      </CardContent>
      {/* footer */}
      <ChaletsCardsCardActions>
        <ChaletsCardsCardActionsButton size="small">
          المزيد من التفاصيل
        </ChaletsCardsCardActionsButton>
        <ChaletsCardsCardActionsButton size="small">
          احجز الآن
        </ChaletsCardsCardActionsButton>
      </ChaletsCardsCardActions>
    </StyledChaletsCardsCard>
  );
};

export default ChaletsCardsCard;

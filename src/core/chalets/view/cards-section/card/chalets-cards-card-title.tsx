import {
  ChaletsCardsCardRatingStars,
  ChaletsCardsCardRatingWrapper,
  ChaletsCardsCardStarIcon,
  ChaletsCardsCardTitleWrapper,
  ChaletsCardsCardTitle,
} from "~/core/chalets/view/cards-section/card/style";

const ChaletsCardsCardMainTitle = () => {
  return (
    <ChaletsCardsCardTitleWrapper>
      <ChaletsCardsCardTitle>شاليه الوادي</ChaletsCardsCardTitle>
      <ChaletsCardsCardRatingWrapper>
        <ChaletsCardsCardStarIcon />
        <ChaletsCardsCardRatingStars>4.5</ChaletsCardsCardRatingStars>
      </ChaletsCardsCardRatingWrapper>
    </ChaletsCardsCardTitleWrapper>
  );
};

export default ChaletsCardsCardMainTitle;

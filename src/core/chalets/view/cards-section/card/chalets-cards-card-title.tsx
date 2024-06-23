import {
  ChaletsCardsCardRatingStars,
  ChaletsCardsCardRatingWrapper,
  ChaletsCardsCardStarIcon,
  ChaletsCardsCardTitleWrapper,
  ChaletsCardsCardTitle,
} from "~/core/chalets/view/cards-section/card/style";

type IChaletsCardsCardMainTitleProps = {
  name: string;
  numberOfStars: number;
};

const ChaletsCardsCardMainTitle = (props: IChaletsCardsCardMainTitleProps) => {
  const { name, numberOfStars } = props;
  return (
    <ChaletsCardsCardTitleWrapper>
      <ChaletsCardsCardTitle>{name}</ChaletsCardsCardTitle>
      {numberOfStars && (
        <ChaletsCardsCardRatingWrapper>
          <ChaletsCardsCardStarIcon />
          <ChaletsCardsCardRatingStars>
            {numberOfStars}
          </ChaletsCardsCardRatingStars>
        </ChaletsCardsCardRatingWrapper>
      )}
    </ChaletsCardsCardTitleWrapper>
  );
};

export default ChaletsCardsCardMainTitle;

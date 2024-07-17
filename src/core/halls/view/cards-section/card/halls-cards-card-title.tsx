import {
  ChaletsCardsCardRatingStars,
  ChaletsCardsCardRatingWrapper,
  ChaletsCardsCardTitleWrapper,
  ChaletsCardsCardTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";

type IHallsCardsCardMainTitleProps = {
  name: string;
  pricePerNight: number;
};

const HallsCardsCardMainTitle = (props: IHallsCardsCardMainTitleProps) => {
  const { name, pricePerNight } = props;

  return (
    <ChaletsCardsCardTitleWrapper>
      <ChaletsCardsCardTitle>{name}</ChaletsCardsCardTitle>
      {pricePerNight && (
        <ChaletsCardsCardRatingWrapper>
          <ChaletsCardsCardFeatureIcon src="./icons/money.svg" alt="money" />
          <ChaletsCardsCardRatingStars>
            {pricePerNight} ريال \ ليلة
          </ChaletsCardsCardRatingStars>
        </ChaletsCardsCardRatingWrapper>
      )}
    </ChaletsCardsCardTitleWrapper>
  );
};

export default HallsCardsCardMainTitle;

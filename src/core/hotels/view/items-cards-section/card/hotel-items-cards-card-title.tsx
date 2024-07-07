import {
  ChaletsCardsCardRatingStars,
  ChaletsCardsCardRatingWrapper,
  ChaletsCardsCardTitleWrapper,
  ChaletsCardsCardTitle,
  ChaletsCardsCardFeatureIcon,
} from "~/core/chalets/view/cards-section/card/style";

type IHotelItemsCardsCardMainTitleProps = {
  name: string;
  roomsNumber?: string;
};

const HotelItemsCardsCardMainTitle = (
  props: IHotelItemsCardsCardMainTitleProps
) => {
  const { name, roomsNumber } = props;
  return (
    <ChaletsCardsCardTitleWrapper>
      <ChaletsCardsCardTitle>{name}</ChaletsCardsCardTitle>
      {roomsNumber && (
        <ChaletsCardsCardRatingWrapper>
          <ChaletsCardsCardFeatureIcon src={`/icons/rooms.svg`} alt="rooms" />
          <ChaletsCardsCardRatingStars>
            {roomsNumber}
          </ChaletsCardsCardRatingStars>
        </ChaletsCardsCardRatingWrapper>
      )}
    </ChaletsCardsCardTitleWrapper>
  );
};

export default HotelItemsCardsCardMainTitle;

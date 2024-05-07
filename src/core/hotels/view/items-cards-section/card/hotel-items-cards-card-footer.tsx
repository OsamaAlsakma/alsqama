import {
  ChaletsCardsCardActions,
  ChaletsCardsCardActionsButton,
} from "~/core/chalets/view/cards-section/card/style";

type IHotelsCardsCardFooterProps = {
  hotelId: string;
  hotelItemId: string;
};

const HotelItemsCardsCardFooter = (props: IHotelsCardsCardFooterProps) => {
  const { hotelId, hotelItemId } = props;

  return (
    <ChaletsCardsCardActions>
      <ChaletsCardsCardActionsButton
        href={`./${hotelId}/${hotelItemId}`}
        size="small"
      >
        المزيد
      </ChaletsCardsCardActionsButton>
      <ChaletsCardsCardActionsButton size="small">
        احجز الآن
      </ChaletsCardsCardActionsButton>
    </ChaletsCardsCardActions>
  );
};

export default HotelItemsCardsCardFooter;

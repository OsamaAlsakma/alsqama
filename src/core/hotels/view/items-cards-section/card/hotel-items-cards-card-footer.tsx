import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IHotelsCardsCardFooterProps = {
  hotelId: string;
  hotelItemId: string;
};

const HotelItemsCardsCardFooter = (props: IHotelsCardsCardFooterProps) => {
  const { hotelId, hotelItemId } = props;

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.hotels}/${hotelId}/${hotelItemId}`}
      >
        المزيد
      </CardActionsButtonWithLink>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.hotels}/${hotelId}/${hotelItemId}`}
      >
        احجز الآن
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default HotelItemsCardsCardFooter;

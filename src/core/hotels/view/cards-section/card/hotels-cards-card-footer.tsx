import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IHotelsCardsCardFooterProps = {
  hotelId: string;
};

const HotelsCardsCardFooter = (props: IHotelsCardsCardFooterProps) => {
  const { hotelId } = props;

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.hotels}/${hotelId}`}
      >
        المزيد
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default HotelsCardsCardFooter;

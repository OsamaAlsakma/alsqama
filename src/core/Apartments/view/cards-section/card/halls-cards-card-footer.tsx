import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IHallsCardsCardFooterProps = {
  hallId: string;
};

const HallsCardsCardFooter = (props: IHallsCardsCardFooterProps) => {
  const { hallId } = props;

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink to={`${servicesPageEndpoint.halls}/${hallId}`}>
        المزيد
      </CardActionsButtonWithLink>

      <CardActionsButtonWithLink to={`${servicesPageEndpoint.halls}/${hallId}`}>
        احجز الآن
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default HallsCardsCardFooter;

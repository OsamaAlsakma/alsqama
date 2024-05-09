import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  ChaletsCardsCardActions,
  ChaletsCardsCardActionsButton,
} from "~/core/chalets/view/cards-section/card/style";

type IHallsCardsCardFooterProps = {
  hallId: string;
};

const HallsCardsCardFooter = (props: IHallsCardsCardFooterProps) => {
  const { hallId } = props;

  return (
    <ChaletsCardsCardActions>
      <ChaletsCardsCardActionsButton
        href={`${servicesPageEndpoint.halls}/${hallId}`}
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

export default HallsCardsCardFooter;

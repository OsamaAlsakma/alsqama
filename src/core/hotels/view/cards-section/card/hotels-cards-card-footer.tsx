import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  ChaletsCardsCardActions,
  ChaletsCardsCardActionsButton,
} from "~/core/chalets/view/cards-section/card/style";

type IHotelsCardsCardFooterProps = {
  hotelId: string;
};

const HotelsCardsCardFooter = (props: IHotelsCardsCardFooterProps) => {
  const { hotelId } = props;

  return (
    <ChaletsCardsCardActions>
      <ChaletsCardsCardActionsButton
        href={`${servicesPageEndpoint.hotels}/${hotelId}`}
        size="small"
      >
        تصفح الفندق
      </ChaletsCardsCardActionsButton>
    </ChaletsCardsCardActions>
  );
};

export default HotelsCardsCardFooter;

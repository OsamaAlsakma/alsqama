import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { CardActionsButtonWithLink } from "~/bootstrap/helper/global-styles";
import { ChaletsCardsCardActions } from "~/core/chalets/view/cards-section/card/style";

type IChaletsCardsCardFooterProps = {
  chaletId: string;
};

const ChaletsCardsCardFooter = (props: IChaletsCardsCardFooterProps) => {
  const { chaletId } = props;

  return (
    <ChaletsCardsCardActions>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.chalets}/${chaletId}`}
      >
        المزيد
      </CardActionsButtonWithLink>
      <CardActionsButtonWithLink
        to={`${servicesPageEndpoint.chalets}/${chaletId}`}
      >
        أحجز الآن
      </CardActionsButtonWithLink>
    </ChaletsCardsCardActions>
  );
};

export default ChaletsCardsCardFooter;

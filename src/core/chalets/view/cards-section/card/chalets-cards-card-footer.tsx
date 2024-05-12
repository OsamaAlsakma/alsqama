import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  ChaletsCardsCardActions,
  ChaletsCardsCardActionsButton,
} from "~/core/chalets/view/cards-section/card/style";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";

type IChaletsCardsCardFooterProps = {
  chaletId: string;
};

const ChaletsCardsCardFooter = (props: IChaletsCardsCardFooterProps) => {
  const { chaletId } = props;

  return (
    <ChaletsCardsCardActions>
      <ChaletsCardsCardActionsButton
        href={`${servicesPageEndpoint.chalets}/${chaletId}`}
        size="small"
      >
        المزيد
      </ChaletsCardsCardActionsButton>
      <StyledMainServicesLink
        to={`${servicesPageEndpoint.chalets}/${chaletId}`}
      >
        more
      </StyledMainServicesLink>
      <ChaletsCardsCardActionsButton size="small">
        احجز الآن
      </ChaletsCardsCardActionsButton>
    </ChaletsCardsCardActions>
  );
};

export default ChaletsCardsCardFooter;

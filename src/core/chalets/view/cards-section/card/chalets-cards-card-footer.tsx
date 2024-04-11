import {
  ChaletsCardsCardActions,
  ChaletsCardsCardActionsButton,
} from "~/core/chalets/view/cards-section/card/style";

const ChaletsCardsCardFooter = () => {
  return (
    <ChaletsCardsCardActions>
      <ChaletsCardsCardActionsButton size="small">
        المزيد من التفاصيل
      </ChaletsCardsCardActionsButton>
      <ChaletsCardsCardActionsButton size="small">
        احجز الآن
      </ChaletsCardsCardActionsButton>
    </ChaletsCardsCardActions>
  );
};

export default ChaletsCardsCardFooter;

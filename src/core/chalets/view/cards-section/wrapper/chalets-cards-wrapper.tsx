import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import ChaletsCardsCard from "~/core/chalets/view/cards-section/card/chalets-cards-card";

const ChaletsCardsWrapper = () => {
  return (
    <HandlingSectionPaddingWrapper>
      <ChaletsCardsCard />
    </HandlingSectionPaddingWrapper>
  );
};

export default ChaletsCardsWrapper;

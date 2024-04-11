import ChaletsCardsCard from "~/core/chalets/view/cards-section/card/chalets-cards-card";
import { StyledChaletsCardsWrapper } from "~/core/chalets/view/cards-section/wrapper/style";

const ChaletsCardsWrapper = () => {
  return (
    <StyledChaletsCardsWrapper>
      <ChaletsCardsCard />
      <ChaletsCardsCard />
      <ChaletsCardsCard />
      <ChaletsCardsCard />
      <ChaletsCardsCard />
    </StyledChaletsCardsWrapper>
  );
};

export default ChaletsCardsWrapper;

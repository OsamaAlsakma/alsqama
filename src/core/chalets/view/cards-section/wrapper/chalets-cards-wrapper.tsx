import styled from "styled-components";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import ChaletsCardsCard from "~/core/chalets/view/cards-section/card/chalets-cards-card";
import * as palette from "~/bootstrap/helper/global-helper";

const StyledHandlingSectionPaddingWrapper = styled(
  HandlingSectionPaddingWrapper
)`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${palette.smallScreenSize}) {
    justify-content: space-between;
  }
`;

const ChaletsCardsWrapper = () => {
  return (
    <StyledHandlingSectionPaddingWrapper>
      <ChaletsCardsCard />
      <ChaletsCardsCard />
      <ChaletsCardsCard />
      <ChaletsCardsCard />
      <ChaletsCardsCard />
    </StyledHandlingSectionPaddingWrapper>
  );
};

export default ChaletsCardsWrapper;

import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";

export const StyledChaletsCardsWrapper = styled(HandlingSectionPaddingWrapper)`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${palette.smallScreenSize}) {
    justify-content: space-between;
  }
`;

export const ChaletsCardsWrapperMessages = styled.div`
  width: 100%;
  text-align: center;
`;

import { styled } from "styled-components";
import { mediumScreenSize } from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";

export const InfoTabsAndBookingCardWrapperPadded = styled(
  HandlingSectionPaddingWrapper
)`
  display: flex;
  gap: 16px;
  @media (max-width: ${mediumScreenSize}) {
    flex-direction: column;
  }
`;

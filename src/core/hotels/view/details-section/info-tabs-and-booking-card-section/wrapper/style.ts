import { styled } from "styled-components";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";
import * as palette from "~/bootstrap/helper/global-helper";

export const InfoTabsAndBookingCardWrapperPadded = styled(
  HandlingSectionPaddingWrapper
)`
  display: flex;
  gap: 16px;
  @media (max-width: ${palette.mediumScreenSize}) {
    flex-direction: column;
  }
`;

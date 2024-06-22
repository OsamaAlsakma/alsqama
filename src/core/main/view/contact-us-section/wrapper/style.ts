import styled from "styled-components";
import {
  mediumScreenSize,
  primaryColor,
} from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";

export const StyledHandlingSectionPaddingWrapper = styled(
  HandlingSectionPaddingWrapper
)`
  background-color: ${primaryColor};
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @media (max-width: ${mediumScreenSize}) {
    flex-direction: column;
  }
`;

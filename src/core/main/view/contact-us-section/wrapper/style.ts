import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";
import { HandlingSectionPaddingWrapper } from "~/bootstrap/helper/global-styles";

export const StyledHandlingSectionPaddingWrapper = styled(
  HandlingSectionPaddingWrapper
)`
  background-color: ${palette.primaryColor};
  display: flex;
  gap: 30px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

import { styled } from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";

export const StyledHeaderTabs = styled.div`
  font-size: 18px;
  display: flex;
  gap: 24px;

  @media (max-width: ${palette.extraLargeScreenSize}) {
    gap: 8px;
  }
  @media (max-width: ${palette.largeScreenSize}) {
    display: none;
  }
`;

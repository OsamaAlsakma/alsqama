import { styled } from "styled-components";
import {
  extraLargeScreenSize,
  largeScreenSize,
} from "~/bootstrap/helper/global-helper";

export const StyledHeaderTabs = styled.div`
  font-size: 18px;
  display: flex;
  gap: 24px;

  @media (max-width: ${extraLargeScreenSize}) {
    gap: 8px;
  }
  @media (max-width: ${largeScreenSize}) {
    display: none;
  }
`;

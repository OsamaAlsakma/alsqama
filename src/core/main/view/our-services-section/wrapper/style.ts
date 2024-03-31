import styled from "styled-components";
import * as palette from "../../../../../bootstrap/helper/global-helper";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon/SvgIcon";

export const StyledMainOurServicesCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledMainOurServicesCardIcon = styled(SvgIcon)<SvgIconProps>`
  && {
    width: 36px;
    height: 36px;
    color: ${palette.primaryColor};
  }
`;

export const StyledMainOurServicesCardTitleAnddescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledMainOurServicesWrapper = styled.div`
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${palette.largeScreenSize}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${palette.smallScreenSize}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledMainOurServicesCardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

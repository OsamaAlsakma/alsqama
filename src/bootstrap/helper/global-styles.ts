import { Button } from "@mui/material";
import styled from "styled-components";
import * as palette from "./../helper/global-helper";

export const StyledAppTitleWrapper = styled.h3`
  font-size: 32px;
  color: ${palette.primaryColor};
  margin: 16px 0;

  @media (max-width: ${palette.smallScreenSize}) {
    font-size: 22px;
  }
`;

export const HandlingSectionPaddingWrapper = styled.div`
  padding: 32px ${palette.paddingBigScreens};

  @media (max-width: ${palette.mediumScreenSize}) {
    padding: 24px ${palette.paddingMediumScreens};
  }

  @media (max-width: ${palette.smallScreenSize}) {
    padding: 16px ${palette.paddingSmallScreens};
  }
`;

export const StyledMainAppButton = styled(Button)`
  && {
    font-family: Tajawal;
    background-color: ${palette.secondaryColor};
    font-weight: bold;
    font-size: 16px;
    color: black;
  }
`;

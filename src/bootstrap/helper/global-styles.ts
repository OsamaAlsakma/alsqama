import { Button } from "@mui/material";
import styled from "styled-components";
import * as palette from "~/bootstrap/helper/global-helper";

export const StyledAppTitleWrapper = styled.h3`
  color: ${palette.primaryColor};
  margin: 16px 0;

  font-size: 36px;
  @media (max-width: ${palette.smallScreenSize}) {
    font-size: 26px;
  }
`;

export const StyledAppSubTitleWrapper = styled.h4`
  color: ${palette.primaryColor};
  margin: 8px 0px;
  font-size: 26px;
  width: fit-content;
  @media (max-width: ${palette.smallScreenSize}) {
    font-size: 20px;
  }
`;

export const StyledAppNoteTitleWrapper = styled.span`
  color: black;
  font-weight: bold;
  width: fit-content;
  margin: 8px 0px 2px;
  font-size: 16px;
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
    border-radius: 8px;

    &:hover {
      background-color: ${palette.secondaryColor};
    }
  }
`;

export const StyledAppDivider = styled.hr`
  color: #e4e5eb;
  margin: 16px 0;
`;

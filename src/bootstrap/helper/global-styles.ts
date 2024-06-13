import { Button } from "@mui/material";
import styled from "styled-components";
import {
  largeScreenSize,
  mediumScreenSize,
  paddingBigScreens,
  paddingMediumScreens,
  paddingSmallScreens,
  primaryColor,
  secondaryColor,
  smallScreenSize,
} from "~/bootstrap/helper/global-helper";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";
import Input from "@mui/material/Input/Input";
import { inputCommonProps } from "~/core/chalets/view/filtration-section/wrapper/style";

export const StyledAppTitleWrapper = styled.h3`
  color: ${primaryColor};
  margin: 16px 0;

  font-size: 36px;
  @media (max-width: ${smallScreenSize}) {
    font-size: 26px;
  }
`;

export const StyledAppSubTitleWrapper = styled.h4`
  color: ${primaryColor};
  margin: 8px 0px;
  font-size: 26px;
  width: fit-content;
  @media (max-width: ${smallScreenSize}) {
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
  padding: 32px ${paddingBigScreens};

  @media (max-width: ${mediumScreenSize}) {
    padding: 24px ${paddingMediumScreens};
  }

  @media (max-width: ${smallScreenSize}) {
    padding: 16px ${paddingSmallScreens};
  }
`;

export const StyledMainAppButton = styled(Button)`
  && {
    font-family: Tajawal;
    background-color: ${secondaryColor};
    font-weight: bold;
    font-size: 16px;
    color: black;
    border-radius: 8px;

    &:hover {
      background-color: ${secondaryColor};
    }
  }
`;

export const StyledAppDivider = styled.hr`
  color: #e4e5eb;
  margin: 16px 0;
`;

/**
 * Padding used for the search input
 */
export const inputPaddingStyle = {
  paddingTop: "6px",
  paddingBottom: "0px",
  paddingRight: "9px",
};

/**
 * To use this component you need to provide "to" property.
 * This component is used inside the actions of any card.
 */
export const CardActionsButtonWithLink = styled(StyledMainServicesLink)`
  background-color: ${secondaryColor};
  font-weight: bold;
  border-radius: 8px;
  flex: 1;
  text-align: center;
  line-height: 1.5;
  padding-top: 9px;
  padding-bottom: 3px;
  margin: 0 !important;
`;

/* -------------------------------------------------------------------------- */
/*                                 Filteration                                */
/* -------------------------------------------------------------------------- */
export const FilterationDatesAndOtherWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 80%;
  @media (max-width: ${largeScreenSize}) {
    width: 90%;
  }
  @media (max-width: ${mediumScreenSize}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FilterationASpecificSearchInput = styled(Input)`
  && {
    ${inputCommonProps}
    color: black;
    border: none;
    border: 1px solid black;
    input::placeholder {
      opacity: 0.4;
    }
    font-size: 14px;
    width: 25%;
    height: 48px;
    @media (max-width: ${mediumScreenSize}) {
      width: 100%;
    }
  }
`;

import styled from "styled-components";
import {
  mainFontFamily,
  primaryColor,
  secondaryColor,
} from "~/bootstrap/helper/global-helper";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import Button from "@mui/material/Button/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const StyledServicesBurger = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const StyledServicesBurgerIconButton = styled.div`
  font-size: 36px;
  color: black;
  padding: 0;
  display: flex;
`;

export const StyledBurgerMenuItem = styled(StyledMainServicesLink)`
  padding: 0 16px;
  font-family: ${mainFontFamily};
  font-size: 18px;
  color: black;
`;

/* -------------------------------------------------------------------------- */
/*                                   Drawer                                   */
/* -------------------------------------------------------------------------- */
export const StyledListItemIcon = styled(ListItemIcon)<{ isSelected: boolean }>`
  && {
    min-width: fit-content;
    color: ${({ isSelected }) =>
      isSelected ? `${secondaryColor}` : `${primaryColor}`};
  }
`;

export const SocialMediaIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 16px 0px;
`;

export const HeaderDrawerListItem = styled(ListItem)`
  && {
    margin: 14px 0 !important;
  }
`;

export const HeaderDrawerList = styled(List)`
  && {
    margin: 16px 0 !important;
  }
`;

/* -------------------------------------------------------------------------- */
/*                      ServicesBurgerDrawerLocalization                      */
/* -------------------------------------------------------------------------- */
export const HeaderDrawerLocalizationButtonWrapper = styled(Button)`
  && {
    font-family: Tajawal;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 24px 16px;

    color: #787883;
    transition: all 0.5 ease-in-out;

    border-top: 1px solid #eaedf2;
    border-bottom: 1px solid #eaedf2;

    &:hover {
      background-color: transparent;
    }
  }
`;

export const HeaderDrawerLocalizationIconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HeaderDrawerLocalizationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderDrawerLocalizationKeyword = styled.span`
  border-bottom: 1px solid black;
  color: black;
  line-height: 0.8;
  font-size: 18px;
`;

export const StyledArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
  && {
    color: black;
  }
`;

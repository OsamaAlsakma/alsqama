import styled from "styled-components";
import { mainFontFamily, primaryColor } from "~/bootstrap/helper/global-helper";
import { StyledMainServicesLink } from "~/generic/components/main-services/style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";

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
  color: black;
  padding: 0 16px;
  font-family: ${mainFontFamily};
  font-size: 18px;
`;

/* -------------------------------------------------------------------------- */
/*                                   Drawer                                   */
/* -------------------------------------------------------------------------- */
export const StyledListItemIcon = styled(ListItemIcon)`
  && {
    min-width: fit-content;
    color: ${primaryColor};
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

import ApartmentIcon from "@mui/icons-material/Apartment";
import ChaletIcon from "@mui/icons-material/Chalet";
import FestivalIcon from "@mui/icons-material/Festival";
import HotelIcon from "@mui/icons-material/Hotel";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import langKey from "~/bootstrap/i18n/langKey";
import MainFooterIcons from "~/core/main/view/footer-section/footer-icons/main-footer-icons";
import {
  StyledBurgerMenuItem,
  StyledServicesBurger,
  StyledServicesBurgerIconButton,
} from "~/support/header/services-burger/style";
import * as palette from "~/bootstrap/helper/global-helper";

const StyledListItemIcon = styled(ListItemIcon)`
  && {
    min-width: fit-content;
    color: ${palette.primaryColor};
  }
`;

const SocialMediaIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const ServicesBurgerDrawer = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, ["top"]: open });
    };

  const { t } = useTranslation();
  const burgerItems = [
    {
      url: servicesPageEndpoint.chalets,
      lang: t(langKey.global.chalets),
      icon: ChaletIcon,
    },
    {
      url: servicesPageEndpoint.halls,
      lang: t(langKey.global.halls),
      icon: FestivalIcon,
    },
    {
      url: servicesPageEndpoint.hotels,
      lang: t(langKey.global.hotels),
      icon: HotelIcon,
    },
    {
      url: servicesPageEndpoint.apartments,
      lang: t(langKey.global.apartments),
      icon: ApartmentIcon,
    },
  ];
  const list = () => (
    <Box
      sx={{
        width: "auto",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {burgerItems.map((item, index) => (
          <ListItem key={index}>
            <StyledListItemIcon>{<item.icon />}</StyledListItemIcon>
            <StyledBurgerMenuItem to={item.url}>
              {item.lang}
            </StyledBurgerMenuItem>
          </ListItem>
        ))}
      </List>
      <SocialMediaIconsWrapper>
        <MainFooterIcons />
      </SocialMediaIconsWrapper>
    </Box>
  );

  return (
    <StyledServicesBurger>
      <StyledServicesBurgerIconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontSize: "inherit" }} />
      </StyledServicesBurgerIconButton>

      <Drawer anchor={"top"} open={state["top"]} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </StyledServicesBurger>
  );
};

export default ServicesBurgerDrawer;

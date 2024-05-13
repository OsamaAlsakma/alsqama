import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import langKey from "~/bootstrap/i18n/langKey";
import { StyledBurgerMenuItem } from "~/support/header/services-burger/style";
import MenuIcon from "@mui/icons-material/Menu";
import ChaletIcon from "@mui/icons-material/Chalet";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";

type Anchor = "top";

const ServicesBurgerDrawer = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
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
      icon: ChaletIcon,
    },
    {
      url: servicesPageEndpoint.hotels,
      lang: t(langKey.global.hotels),
      icon: ChaletIcon,
    },
    {
      url: servicesPageEndpoint.apartments,
      lang: t(langKey.global.apartments),
      icon: ChaletIcon,
    },
  ];
  const list = () => (
    <Box
      sx={{
        width: "auto",
      }}
      role="presentation"
      onClick={toggleDrawer("top", false)}
      onKeyDown={toggleDrawer("top", false)}
    >
      <List>
        {burgerItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemIcon>{<item.icon />}</ListItemIcon>
            <StyledBurgerMenuItem to={item.url}>
              {item.lang}
            </StyledBurgerMenuItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer("top", true)} />
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default ServicesBurgerDrawer;

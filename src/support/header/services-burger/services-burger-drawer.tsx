import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import langKey from "~/bootstrap/i18n/langKey";
import { StyledBurgerMenuItem } from "~/support/header/services-burger/style";

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
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* chalets */}
        <ListItem disablePadding>
          <StyledBurgerMenuItem to={servicesPageEndpoint.chalets}>
            {t(langKey.global.chalets)}
          </StyledBurgerMenuItem>
        </ListItem>

        {/* halls */}
        <ListItem disablePadding>
          <StyledBurgerMenuItem to={servicesPageEndpoint.halls}>
            {t(langKey.global.halls)}
          </StyledBurgerMenuItem>
        </ListItem>

        {/* hotels */}
        <ListItem disablePadding>
          <StyledBurgerMenuItem to={servicesPageEndpoint.hotels}>
            {t(langKey.global.hotels)}
          </StyledBurgerMenuItem>
        </ListItem>

        {/* appartments */}
        <ListItem disablePadding>
          <StyledBurgerMenuItem to={servicesPageEndpoint.apartments}>
            {t(langKey.global.apartments)}
          </StyledBurgerMenuItem>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("top", true)}>{"top"}</Button>
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>
    </div>
  );
};

export default ServicesBurgerDrawer;

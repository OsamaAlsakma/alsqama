import ApartmentIcon from "@mui/icons-material/Apartment";
import ChaletIcon from "@mui/icons-material/Chalet";
import ClearIcon from "@mui/icons-material/Clear";
import FestivalIcon from "@mui/icons-material/Festival";
import HotelIcon from "@mui/icons-material/Hotel";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import { appHeaderHeight } from "~/bootstrap/helper/global-helper";
import langKey from "~/bootstrap/i18n/langKey";
import MainFooterIcons from "~/core/main/view/footer-section/footer-icons/main-footer-icons";
import ServicesBurgerDrawerLocalization from "~/support/header/services-burger/services-burger-drawer-localization";
import {
  HeaderDrawerList,
  HeaderDrawerListItem,
  SocialMediaIconsWrapper,
  StyledBurgerMenuItem,
  StyledListItemIcon,
  StyledServicesBurger,
  StyledServicesBurgerIconButton,
} from "~/support/header/services-burger/style";

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
      <HeaderDrawerList>
        {burgerItems.map((item, index) => (
          <HeaderDrawerListItem key={index}>
            <StyledListItemIcon>{<item.icon />}</StyledListItemIcon>
            <StyledBurgerMenuItem to={item.url}>
              {item.lang}
            </StyledBurgerMenuItem>
          </HeaderDrawerListItem>
        ))}
      </HeaderDrawerList>
      <ServicesBurgerDrawerLocalization />
      <SocialMediaIconsWrapper>
        <MainFooterIcons />
      </SocialMediaIconsWrapper>
    </Box>
  );

  return (
    // Wrapper
    <StyledServicesBurger>
      {/* Button */}
      {!state.top ? (
        <StyledServicesBurgerIconButton onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ fontSize: "inherit" }} />
        </StyledServicesBurgerIconButton>
      ) : (
        <StyledServicesBurgerIconButton onClick={toggleDrawer(false)}>
          <ClearIcon sx={{ fontSize: "inherit" }} />
        </StyledServicesBurgerIconButton>
      )}
      {/* content */}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            top: `${appHeaderHeight}`,
          },
        }}
      >
        {list()}
      </Drawer>
    </StyledServicesBurger>
  );
};

export default ServicesBurgerDrawer;

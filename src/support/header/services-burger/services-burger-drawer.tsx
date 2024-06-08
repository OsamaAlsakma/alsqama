import ApartmentIcon from "@mui/icons-material/Apartment";
import ClearIcon from "@mui/icons-material/Clear";
import HotelIcon from "@mui/icons-material/Hotel";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import di from "~/bootstrap/di";
import { servicesPageEndpoint } from "~/bootstrap/helper/endpoints";
import {
  appHeaderHeight,
  primaryColor,
  secondaryColor,
} from "~/bootstrap/helper/global-helper";
import langKey from "~/bootstrap/i18n/langKey";
import ChaletIconComponent from "~/bootstrap/icons/chalet-icon-component";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";
import ServicesBurgerDrawerContactUsIcons from "~/support/header/services-burger/services-burger-drawer-contact-us-icons";
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
import { SvgIcon } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import HallIconComponent from "~/bootstrap/icons/hall-icon-component";

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
  // context
  const { changeSelectedTab, selectedTab } = di
    .resolve(SelectedTabCTX)
    .useContext();

  const burgerItems = [
    {
      url: servicesPageEndpoint.chalets,
      lang: t(langKey.global.chalets),
      icon: (
        <ChaletIconComponent
          color={
            selectedTab === PossibleSelectedTabs.CHALET
              ? `${secondaryColor}`
              : `${primaryColor}`
          }
        />
      ),
      href: PossibleSelectedTabs.CHALET,
    },
    {
      url: servicesPageEndpoint.halls,
      lang: t(langKey.global.halls),
      icon: (
        <HallIconComponent
          color={
            selectedTab === PossibleSelectedTabs.HALL
              ? `${secondaryColor}`
              : `${primaryColor}`
          }
        />
      ),
      href: PossibleSelectedTabs.HALL,
    },
    {
      url: servicesPageEndpoint.hotels,
      lang: t(langKey.global.hotels),
      icon: HotelIcon,
      href: PossibleSelectedTabs.HOTEL,
    },
    {
      url: servicesPageEndpoint.apartments,
      lang: t(langKey.global.apartments),
      icon: ApartmentIcon,
      href: PossibleSelectedTabs.APPARTMENT,
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
            {item.href === PossibleSelectedTabs.HALL ||
            item.href === PossibleSelectedTabs.CHALET ? (
              (item.icon as JSX.Element)
            ) : (
              <StyledListItemIcon isSelected={item.href === selectedTab}>
                {
                  <SvgIcon
                    component={item.icon as SvgIconComponent}
                    style={{ fontSize: "36px" }}
                  />
                }
              </StyledListItemIcon>
            )}
            <StyledBurgerMenuItem
              onClick={() => {
                changeSelectedTab(item.href);
              }}
              to={item.url}
              isSelected={item.href === selectedTab}
            >
              {item.lang}
            </StyledBurgerMenuItem>
          </HeaderDrawerListItem>
        ))}
      </HeaderDrawerList>
      <ServicesBurgerDrawerLocalization />
      <SocialMediaIconsWrapper>
        <ServicesBurgerDrawerContactUsIcons />
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

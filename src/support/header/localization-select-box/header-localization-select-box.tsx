import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "~/bootstrap/i18n/init-i18n";
import {
  GlobalStylesComponent,
  StyledHeaderLocalizationIcon,
  StyledHeaderLocalizationWrapper,
} from "~/support/header/localization-select-box/style";

const HeaderLocalizationSelectBox = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleSetLanguage = (language: LANGS) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeaderLocalizationWrapper>
      <GlobalStylesComponent />
      <IconButton disableRipple onClick={handleClick}>
        <StyledHeaderLocalizationIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: 9001 }}
      >
        <MenuItem onClick={() => handleSetLanguage(LANGS.EN)}>EN</MenuItem>
        <MenuItem onClick={() => handleSetLanguage(LANGS.AR)}>AR</MenuItem>
        <MenuItem onClick={() => handleSetLanguage(LANGS.RU)}>RU</MenuItem>
      </Menu>
    </StyledHeaderLocalizationWrapper>
  );
};

export default HeaderLocalizationSelectBox;

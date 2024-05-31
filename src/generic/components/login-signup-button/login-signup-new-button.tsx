import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useState } from "react";
import styled from "styled-components";
import { Button, Menu } from "@mui/material";

const LoginSignupNewButtonWrapper = styled(Button)`
  && {
    border: 1px solid #666666;
    border-radius: 24px;
    padding: 4px 8px;
    display: flex;
    gap: 6px;
    align-items: center;
    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3) !important;
    }
  }
`;
const headerLoginIconsCommonStyle = `
color: #666666;
font-size: 32px;
`;

const StyledMenuIcon = styled(MenuIcon)`
  && {
    ${headerLoginIconsCommonStyle}
  }
`;

const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  && {
    ${headerLoginIconsCommonStyle}
  }
`;

const LoginSignupNewButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <LoginSignupNewButtonWrapper onClick={handleClick}>
        <StyledMenuIcon />
        <StyledAccountCircleIcon />
      </LoginSignupNewButtonWrapper>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>EN</MenuItem>
        <MenuItem>AR</MenuItem>
        <MenuItem>RU</MenuItem>
      </Menu>
    </>
  );
};

export default LoginSignupNewButton;

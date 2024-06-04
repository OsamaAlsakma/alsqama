/* eslint-disable react-refresh/only-export-components */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useState } from "react";
import styled from "styled-components";
import { Button, Menu } from "@mui/material";
import di from "~/bootstrap/di/init-di";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import LoginSignupModal from "~/generic/components/login-signup-modal/login-signup-modal";
import { largeScreenSize } from "~/bootstrap/helper/global-helper";

const LoginSignupNewButtonWrapper = styled(Button)`
  && {
    border: 1px solid #666666;
    border-radius: 24px;
    padding: 4px 8px;
    display: flex;
    gap: 6px;
    align-items: center;
    min-width: fit-content;
    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3) !important;
    }
    @media (max-width: ${largeScreenSize}) {
      border: none;
      padding: 0px;
      gap: 0px;
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
  @media (max-width: ${largeScreenSize}) {
    display: none !important;
  }
`;

const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  && {
    ${headerLoginIconsCommonStyle}
    @media (max-width: ${largeScreenSize}) {
      font-size: 36px;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
export enum LoginSignupForms {
  LOGIN = "login",
  SIGNUP = "signup",
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
const LoginSignupNewButton = () => {
  // Select Box
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Modal
  const { setIsOpen } = di.resolve(OpenLoginSignUpModalCTX).useContext();
  const [currentForm, setCurrentForm] = useState<LoginSignupForms>(
    LoginSignupForms.LOGIN
  );
  return (
    <>
      <LoginSignupNewButtonWrapper disableRipple onClick={handleClick}>
        <StyledMenuIcon />
        <StyledAccountCircleIcon />
      </LoginSignupNewButtonWrapper>
      <Menu
        style={{ marginTop: "6px", zIndex: 9001 }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            setIsOpen(true);
            handleClose();
            setCurrentForm(LoginSignupForms.LOGIN);
          }}
        >
          تسجيل الدخول
        </MenuItem>
        <MenuItem
          onClick={() => {
            setIsOpen(true);
            handleClose();
            setCurrentForm(LoginSignupForms.SIGNUP);
          }}
        >
          إنشاء حساب
        </MenuItem>
      </Menu>
      <LoginSignupModal
        currentForm={currentForm}
        setCurrentForm={setCurrentForm}
      />
    </>
  );
};

export default LoginSignupNewButton;

import { SvgIconComponent } from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon/SvgIcon";
import di from "~/bootstrap/di";
import HeaderLoginSignupIconVM from "~/support/header/header-login-signup-icon/header-login-signup-icon-vm";
import { StyledHeaderLoginSignupIcon } from "~/support/header/header-login-signup-icon/style";

const HeaderLoginSignupIcon = () => {
  const vm = di.resolve(HeaderLoginSignupIconVM).useVM();
  return (
    <StyledHeaderLoginSignupIcon onClick={vm.onClick}>
      <SvgIcon
        component={vm.props.leadingIcon as SvgIconComponent}
        sx={{
          fontSize: "inherit",
        }}
      />
    </StyledHeaderLoginSignupIcon>
  );
};

export default HeaderLoginSignupIcon;

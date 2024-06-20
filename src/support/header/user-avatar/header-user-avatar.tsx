import Badge from "@mui/material/Badge/Badge";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { useState } from "react";
import di from "~/bootstrap/di";
import Store from "~/bootstrap/helper/store/store-type";
import useStoreSelector from "~/bootstrap/helper/vm/use-store-selector";
import { StyledHeaderUserAvatar } from "~/support/header/user-avatar/style";
import NUserStore from "~/support/login-signup-forms/store/i-user-store";
import { userStoreKey } from "~/support/login-signup-forms/store/user-store";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const HeaderUserAvatar = () => {
  //  token
  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);
  const token = useStoreSelector(userStore, (store) => store.user.token);

  // menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Badge
        overlap="circular"
        variant="dot"
        color="success"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {token ? (
          <StyledHeaderUserAvatar onClick={handleClick} />
        ) : (
          <StyledHeaderUserAvatar
            {...stringAvatar("Salar")}
            onClick={handleClick}
          />
        )}
      </Badge>
      <Menu
        style={{ marginTop: "6px", zIndex: 9001 }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          style={{ backgroundColor: "transparent" }}
          onClick={() => {
            userStore.getState().storeUser({
              token: undefined,
            });
            handleClose();
          }}
        >
          تسجيل الخروج
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderUserAvatar;

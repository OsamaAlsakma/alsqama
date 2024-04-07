import Avatar from "@mui/material/Avatar/Avatar";
import di from "~/bootstrap/di";
import Store from "~/bootstrap/helper/store/store-type";
import useStoreSelector from "~/bootstrap/helper/vm/use-store-selector";
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
  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);
  const username = useStoreSelector(userStore, (store) => store.user.username);

  return username ? <Avatar {...stringAvatar(username)} /> : <Avatar />;
};

export default HeaderUserAvatar;

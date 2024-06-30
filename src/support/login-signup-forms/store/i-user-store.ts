/* eslint-disable @typescript-eslint/no-namespace */
import {
  BaseEventsServerSide,
  BaseStoreServerSide,
} from "~/bootstrap/helper/store/store-type";

export type UserData = {
  username?: string;
  email?: string;
  token?: string;
  userId?: string;
};

namespace NUserStore {
  export type store = BaseStoreServerSide & {
    user: UserData;
  };

  export type events = BaseEventsServerSide & {
    storeUser: (userData: UserData) => void;
  };

  export interface IUsernameStore extends store, events {}
}

export default NUserStore;

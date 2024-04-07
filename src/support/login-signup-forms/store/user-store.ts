import { createStore } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { baseServerSideEvents } from "~/bootstrap/helper/store/store-events";
import NUserStore from "~/support/login-signup-forms/store/i-user-store";

const userStore = createStore(
  subscribeWithSelector(
    combine<NUserStore.store, NUserStore.events>(
      {
        user: {},
        isLoading: false,
      },
      (emit) => ({
        ...baseServerSideEvents(emit),
        storeUser(user) {
          emit((store) => ({
            ...store,
            user,
            isLoading: false,
            error: undefined,
          }));
        },
      })
    )
  )
);

export const userStoreKey = "userStoreKey";

export default userStore;

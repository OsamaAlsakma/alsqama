import { StoreApi } from "zustand";

export type BaseStoreServerSide = {
  isLoading: boolean;
  error?: string;
};

export type BaseEventsServerSide = {
  setIsLoading: (isLoading: boolean) => void;
  setError: (message?: string) => void;
};

export type BaseServerSideEmit = (
  partial:
    | BaseStoreServerSide
    | Partial<BaseStoreServerSide>
    | ((state: BaseStoreServerSide) => BaseStoreServerSide),
  replace?: boolean | undefined,
) => void;

type Store<STORE_TYPE> = StoreApi<STORE_TYPE>;
export default Store;

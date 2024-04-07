import { BaseServerSideEmit } from "~/bootstrap/helper/store/store-type";

export const baseServerSideEvents = (emit: BaseServerSideEmit) => ({
  setIsLoading(isLoading: boolean) {
    emit((store) => ({
      ...store,
      isLoading,
    }));
  },
  setError(errorMessage?: string) {
    emit((store) => ({
      ...store,
      error: errorMessage,
    }));
  },
});

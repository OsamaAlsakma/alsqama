import { DependencyContainer } from "tsyringe";
import userStoreDI from "~/bootstrap/di/stores/user-store-di";

const initStoresDI = (di: DependencyContainer) => {
  /* ---------------------------------- User ---------------------------------- */
  userStoreDI(di);
};

export default initStoresDI;

import { DependencyContainer } from "tsyringe";
import userStore, {
  userStoreKey,
} from "~/support/login-signup-forms/store/user-store";

const userStoreDI = (di: DependencyContainer) => {
  di.registerInstance(userStoreKey, userStore);
};

export default userStoreDI;

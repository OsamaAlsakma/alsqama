import di from "~/bootstrap/di";
import Store from "~/bootstrap/helper/store/store-type";
import useStoreSelector from "~/bootstrap/helper/vm/use-store-selector";
import LoginSignupNewButton from "~/generic/components/login-signup-button/login-signup-new-button";
import LogoAndHeaderTabs from "~/generic/components/main-logo/logo-and-header-tabs";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import HeaderLocalizationSelectBox from "~/support/header/localization-select-box/header-localization-select-box";
import {
  FixedHeader,
  StyledLocalizationAndLoginSignup,
  StyledMainHeader,
} from "~/support/header/main-header/style";
import ServicesBurgerDrawer from "~/support/header/services-burger/services-burger-drawer";

import HeaderUserAvatar from "~/support/header/user-avatar/header-user-avatar";
import NUserStore from "~/support/login-signup-forms/store/i-user-store";
import { userStoreKey } from "~/support/login-signup-forms/store/user-store";

const MainHeader = () => {
  const { Provider: OpenModlaProvider } = di.resolve(OpenLoginSignUpModalCTX);
  const userStore = di.resolve<Store<NUserStore.IUsernameStore>>(userStoreKey);
  const token = useStoreSelector(userStore, (store) => store.user.token);

  return (
    <FixedHeader>
      <StyledMainHeader>
        <ServicesBurgerDrawer />
        <LogoAndHeaderTabs />
        <StyledLocalizationAndLoginSignup>
          <HeaderLocalizationSelectBox />
          <OpenModlaProvider>
            {token ? <HeaderUserAvatar /> : <LoginSignupNewButton />}
          </OpenModlaProvider>
        </StyledLocalizationAndLoginSignup>
      </StyledMainHeader>
    </FixedHeader>
  );
};

export default MainHeader;

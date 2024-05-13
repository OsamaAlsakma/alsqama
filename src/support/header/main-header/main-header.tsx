import di from "~/bootstrap/di";
import Store from "~/bootstrap/helper/store/store-type";
import useStoreSelector from "~/bootstrap/helper/vm/use-store-selector";
import LoginSignupButton from "~/generic/components/login-signup-button/login-signup-button";
import LoginSignupModal from "~/generic/components/login-signup-modal/login-signup-modal";
import MainLogo from "~/generic/components/main-logo/main-logo";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import HeaderLoginSignupIcon from "~/support/header/header-login-signup-icon/header-login-signup-icon";
import HeaderLocalizationSelectBox from "~/support/header/localization-select-box/header-localization-select-box";
import {
  FixedHeader,
  StyledLocalizationAndLoginSignup,
  StyledMainHeader,
} from "~/support/header/main-header/style";
import ServicesBurger from "~/support/header/services-burger/services-burger";
import ServicesBurgerDrawer from "~/support/header/services-burger/services-burger-drawer";
import HeaderTabs from "~/support/header/tabs/header-tabs";
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
        <ServicesBurger />
        <ServicesBurgerDrawer />
        <MainLogo />
        <HeaderTabs />
        <StyledLocalizationAndLoginSignup>
          <HeaderLocalizationSelectBox />
          <OpenModlaProvider>
            {token ? <HeaderUserAvatar /> : <LoginSignupButton />}
            <LoginSignupModal />
            <HeaderLoginSignupIcon />
          </OpenModlaProvider>
        </StyledLocalizationAndLoginSignup>
      </StyledMainHeader>
    </FixedHeader>
  );
};

export default MainHeader;

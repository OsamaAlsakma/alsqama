/* eslint-disable react-hooks/rules-of-hooks */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import { inject, singleton } from "tsyringe";
import { SetState } from "~/bootstrap/helper/global-types";
import langKey from "~/bootstrap/i18n/langKey";
import IAppButtonVM, {
  AppButtonVariant,
} from "~/generic/components/app-button/i-app-button-vm";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";

/**
 * This Button shows login sign up button
 */
@singleton()
export default class LoginSignupButtonVM {
  /* --------------------------------- Getter --------------------------------- */
  private get title() {
    return useTranslation().t(langKey.mainPage.signinOrSignup);
  }

  /* ------------------------------- constructor ------------------------------ */
  constructor(
    @inject(OpenLoginSignUpModalCTX)
    private context: OpenLoginSignUpModalCTX
  ) {}

  /* ----------------------------- Implementation ----------------------------- */
  useVM(): IAppButtonVM {
    const { setIsOpen } = this.context.useContext();

    return {
      props: {
        title: this.title,
        isDisabled: false,
        variant: AppButtonVariant.CONTAINTED,
        leadingIcon: AccountCircleIcon,
      },
      onClick: () => this.handleOnClick(setIsOpen),
    };
  }

  /* -------------------------------------------------------------------------- */
  private handleOnClick(setIsOpen: SetState<boolean>) {
    setIsOpen(true);
  }
  /* -------------------------------------------------------------------------- */
}

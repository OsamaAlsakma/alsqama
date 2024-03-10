/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import IAppButtonVM, { AppButtonVariant } from "../app-button/i-app-button-vm";
import langKey from "../../../bootstrap/i18n/langKey";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default class LoginSignupButtonVM {
  private get title() {
    return useTranslation().t(langKey.mainPage.signinOrSignup);
  }
  useVM(): IAppButtonVM {
    return {
      props: {
        title: this.title,
        isDisabled: false,
        variant: AppButtonVariant.CONTAINTED,
        leadingIcon: AccountCircleIcon,
      },
    };
  }
}

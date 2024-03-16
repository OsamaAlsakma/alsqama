/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import langKey from "../../../../bootstrap/i18n/langKey";
import IAppButtonVM, {
  AppButtonColors,
} from "../../app-button/i-app-button-vm";

export default class MainServicesHotelsButtonVM {
  useVM(): IAppButtonVM {
    const { t } = useTranslation();
    return {
      props: {
        title: t(langKey.global.hotels),
        isDisabled: false,
        color: AppButtonColors.INHERIT,
      },
    };
  }
}

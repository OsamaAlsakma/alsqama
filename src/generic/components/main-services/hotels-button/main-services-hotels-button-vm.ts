/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import langKey from "../../../../bootstrap/i18n/langKey";
import IAppButtonVM, {
  AppButtonColors,
} from "../../app-button/i-app-button-vm";
import { inject, singleton } from "tsyringe";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";

@singleton()
export default class MainServicesHotelsButtonVM {
  /* ------------------------------- Constructor ------------------------------ */
  constructor(
    @inject(SelectedTabCTX)
    private selectedTabCTX: SelectedTabCTX
  ) {}

  /* ----------------------------- Implementation ----------------------------- */
  useVM(): IAppButtonVM {
    const { t } = useTranslation();
    const { changeSelectedTab } = this.selectedTabCTX.useContext();
    return {
      props: {
        title: t(langKey.global.hotels),
        isDisabled: false,
        color: AppButtonColors.INHERIT,
        href: PossibleSelectedTabs.HOTEL,
      },
      onClick: () => {
        changeSelectedTab(PossibleSelectedTabs.HOTEL);
      },
    };
  }
}

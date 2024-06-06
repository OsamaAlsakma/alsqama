/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import IAppButtonVM, {
  AppButtonColors,
} from "../../app-button/i-app-button-vm";
import { singleton, inject } from "tsyringe";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";
import langKey from "~/bootstrap/i18n/langKey";
@singleton()
export default class MainServicesHallsButtonVM {
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
        title: t(langKey.global.halls),
        isDisabled: false,
        color: AppButtonColors.INHERIT,
        href: PossibleSelectedTabs.HALL,
      },
      onClick: () => {
        changeSelectedTab(PossibleSelectedTabs.HALL);
      },
    };
  }
}

/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import IAppButtonVM, {
  AppButtonColors,
} from "../../app-button/i-app-button-vm";
import langKey from "~/bootstrap/i18n/langKey";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";
import { inject, singleton } from "tsyringe";

@singleton()
export default class MainServicesChaletsButtonVM {
  constructor(
    @inject(SelectedTabCTX)
    private selectedTabCTX: SelectedTabCTX
  ) {}
  useVM(): IAppButtonVM {
    const { changeSelectedTab } = this.selectedTabCTX.useContext();
    const { t } = useTranslation();

    return {
      props: {
        title: t(langKey.global.chalets),
        isDisabled: false,
        color: AppButtonColors.INHERIT,
        href: PossibleSelectedTabs.CHALET,
      },
      onClick: () => {
        changeSelectedTab(PossibleSelectedTabs.CHALET);
      },
    };
  }
}

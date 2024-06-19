/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import { singleton, inject } from "tsyringe";
import langKey from "~/bootstrap/i18n/langKey";
import IAppButtonVM, {
  AppButtonColors,
} from "~/generic/components/app-button/i-app-button-vm";
import SelectedTabCTX, {
  PossibleSelectedTabs,
} from "~/generic/context/selected-tab-ctx";
@singleton()
export default class MainServicesTermsOfUseButtonVM {
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
        title: t(langKey.support.termsOfUse),
        isDisabled: false,
        color: AppButtonColors.INHERIT,
        href: PossibleSelectedTabs.TERMSOFUSE,
      },
      onClick: () => {
        changeSelectedTab(PossibleSelectedTabs.TERMSOFUSE);
      },
    };
  }
}

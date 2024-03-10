import { useTranslation } from "react-i18next";
import IHeaderTabsVM from "./i-header-tabs-vm";
import langKey from "../../../bootstrap/i18n/langKey";

export default class HeaderTabsVM {
  useVM(): IHeaderTabsVM {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation();
    console.log("tabs", t(langKey.header.chalets));
    return {
      props: {
        headerTabs: [
          // TODO fix localization
          t(langKey.header.hotels),
          t(langKey.header.chalets),
          t(langKey.header.resorts),
        ],
      },
    };
  }
}

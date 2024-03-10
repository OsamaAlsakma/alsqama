/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import IHeaderTabsVM from "./i-header-tabs-vm";
import langKey from "../../../bootstrap/i18n/langKey";

/**
 * This class returns the list of tabs in the header
 */
export default class HeaderTabsVM {
  useVM(): IHeaderTabsVM {
    const { t } = useTranslation();
    return {
      props: {
        headerTabs: [
          t(langKey.header.hotels),
          t(langKey.header.chalets),
          t(langKey.header.resorts),
          t(langKey.header.halls),
        ],
      },
    };
  }
}

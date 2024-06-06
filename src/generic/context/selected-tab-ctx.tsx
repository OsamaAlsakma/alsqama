import { ReactNode, createContext, useMemo, useState } from "react";
import { singleton } from "tsyringe";
import { SetState } from "~/bootstrap/helper/global-types";
import BaseContext from "~/generic/context/base-ctx";

export enum PossibleSelectedTabs {
  HOTEL = "hotel",
  CHALET = "chalet",
  APPARTMENT = "appartment",
  HALL = "hall",
  TERMSOFUSE = "terms_of_use",
}

@singleton()
export default class SelectedTabCTX extends BaseContext<{
  selectedTab: PossibleSelectedTabs | undefined;
  changeSelectedTab: SetState<PossibleSelectedTabs | undefined>;
}> {
  /* ------------------------------- Attributes ------------------------------- */
  context = createContext<{
    selectedTab: PossibleSelectedTabs | undefined;
    changeSelectedTab: SetState<PossibleSelectedTabs | undefined>;
  }>({
    selectedTab: undefined,
    changeSelectedTab: () => undefined,
  });

  /* -------------------------------------------------------------------------- */
  Provider: (props: { children?: ReactNode }) => JSX.Element = (props) => {
    const { children } = props;
    const [selectedTab, changeSelectedTab] = useState<
      PossibleSelectedTabs | undefined
    >();

    const providerValue = useMemo(
      () => ({
        selectedTab,
        changeSelectedTab,
      }),
      [selectedTab]
    );
    const { context } = this;
    return (
      <context.Provider value={providerValue}>{children}</context.Provider>
    );
  };
  /* -------------------------------------------------------------------------- */
}

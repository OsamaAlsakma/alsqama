import { ReactNode, createContext, useMemo, useState } from "react";
import { singleton } from "tsyringe";
import { SetState } from "~/bootstrap/helper/global-types";
import BaseContext from "~/generic/context/base-ctx";

@singleton()
export default class OpenLoginSignUpModalCTX extends BaseContext<{
  isOpen: boolean;
  setIsOpen: SetState<boolean>;
}> {
  /* ------------------------------- Attributes ------------------------------- */
  context = createContext<{
    isOpen: boolean;
    setIsOpen: SetState<boolean>;
  }>({
    isOpen: false,
    setIsOpen: () => undefined,
  });

  /* -------------------------------------------------------------------------- */
  Provider: (props: { children?: ReactNode }) => JSX.Element = (props) => {
    const { children } = props;
    const [isOpen, setIsOpen] = useState(false);

    const providerValue = useMemo(
      () => ({
        isOpen,
        setIsOpen,
      }),
      [isOpen]
    );
    const { context } = this;
    return (
      <context.Provider value={providerValue}>{children}</context.Provider>
    );
  };
  /* -------------------------------------------------------------------------- */
}

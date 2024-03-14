import { Context, ReactNode, useContext, PropsWithChildren } from "react";

export interface IBaseContext<CTX_DATA> {
  context: Context<CTX_DATA>;
  useContext: () => CTX_DATA;
  Provider: (props: PropsWithChildren) => JSX.Element;
}

export default abstract class BaseContext<CTX_DATA>
  implements IBaseContext<CTX_DATA>
{
  /* -------------------------------------------------------------------------- */
  abstract context: Context<CTX_DATA>;

  /* ----------------------------- Implementation ----------------------------- */
  useContext: () => CTX_DATA = () => {
    const ctx = useContext(this.context);

    if (!ctx) {
      throw new Error("context should be used inside of its provider");
    }

    return ctx;
  };

  /* -------------------------------------------------------------------------- */
  abstract Provider: (props: { children?: ReactNode }) => JSX.Element;
  /* -------------------------------------------------------------------------- */
}

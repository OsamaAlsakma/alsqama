import { inject, singleton } from "tsyringe";
import { SetState } from "~/bootstrap/helper/global-types";
import IAppModalVM from "~/generic/components/app-modal/i-app-modal-vm";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";

@singleton()
export default class LoginSignupModalVM {
  /* ------------------------------- Constructor ------------------------------ */
  constructor(
    @inject(OpenLoginSignUpModalCTX)
    private currentPageCTX: OpenLoginSignUpModalCTX
  ) {}

  /* ----------------------------- Implementation ----------------------------- */
  useVM(): IAppModalVM {
    const { isOpen, setIsOpen } = this.currentPageCTX.useContext();
    return {
      props: {
        open: isOpen,
      },
      handleOpen: () => this.handleOpen(setIsOpen),
      handleClose: () => this.handleClose(setIsOpen),
    };
  }

  /* -------------------------------------------------------------------------- */
  private handleOpen(setIsOpen: SetState<boolean>) {
    setIsOpen(true);
  }

  /* -------------------------------------------------------------------------- */
  private handleClose(setIsOpen: SetState<boolean>) {
    setIsOpen(false);
  }

  /* -------------------------------------------------------------------------- */
}

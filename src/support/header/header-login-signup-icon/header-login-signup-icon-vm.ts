import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { inject, singleton } from "tsyringe";
import { SetState } from "~/bootstrap/helper/global-types";
import IAppButtonVM from "~/generic/components/app-button/i-app-button-vm";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";

/**
 * onClick on this icon, login sign modal will be open
 */
@singleton()
export default class HeaderLoginSignupIconVM {
  /* ------------------------------- constructor ------------------------------ */
  constructor(
    @inject(OpenLoginSignUpModalCTX)
    private context: OpenLoginSignUpModalCTX
  ) {}

  /* ----------------------------- Implementation ----------------------------- */
  useVM(): IAppButtonVM {
    const { setIsOpen } = this.context.useContext();
    return {
      props: {
        isDisabled: false,
        leadingIcon: AccountCircleIcon,
      },
      onClick: () => this.handleOnClick(setIsOpen),
    };
  }
  /* -------------------------------------------------------------------------- */
  private handleOnClick(setIsOpen: SetState<boolean>) {
    setIsOpen(true);
  }
  /* -------------------------------------------------------------------------- */
}

import IAppButtonVM, {
  AppButtonColors,
} from "~/generic/components/app-button/i-app-button-vm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OpenLoginSignUpModalCTX from "~/generic/context/open-login-signup-modal-ctx";
import { inject, singleton } from "tsyringe";
import { SetState } from "~/bootstrap/helper/global-types";

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
        color: AppButtonColors.INHERIT,
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

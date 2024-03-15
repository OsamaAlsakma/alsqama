import { PropsWithChildren } from "react";
import IAppModalVM from "~/generic/components/app-modal/i-app-modal-vm";

export default interface IAppModalProps extends PropsWithChildren {
  vm: IAppModalVM;
}

import IAppModalProps from "~/generic/components/app-modal/app-modal-props";
import {
  StyledAppModal,
  StyledAppModalBox,
} from "~/generic/components/app-modal/styled";

function AppModal(props: IAppModalProps) {
  const { vm, children } = props;

  return (
    <div>
      {children && (
        <StyledAppModal open={vm.props.open} onClose={vm.handleClose}>
          <StyledAppModalBox>{children}</StyledAppModalBox>
        </StyledAppModal>
      )}
    </div>
  );
}

export default AppModal;

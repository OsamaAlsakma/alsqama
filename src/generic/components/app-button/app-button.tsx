import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import IAppButtonProps from "./i-app-button-props";

export default function AppButton(props: IAppButtonProps) {
  const { vm, className } = props;
  const Leading = vm.props.leadingIcon;
  const Trailing = vm.props.trailingIcon;
  return (
    <Button
      onClick={vm.onClick}
      color={vm.props.color}
      disabled={vm.props.isDisabled}
      endIcon={
        Trailing && typeof Trailing !== "string" ? (
          <SvgIcon component={Trailing} />
        ) : (
          Trailing
        )
      }
      variant={vm.props.variant}
      size={vm.props.size}
      className={className}
      type={vm.props.type}
    >
      {Leading && typeof Leading !== "string" ? (
        <SvgIcon component={Leading} />
      ) : (
        Leading
      )}
      {vm.props.title}
    </Button>
  );
}

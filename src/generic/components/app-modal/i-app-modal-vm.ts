export default interface IAppModalVM {
  props: {
    open: boolean;
  };
  handleOpen: () => void;
  handleClose: () => void;
}

import { Snackbar, Alert } from "@mui/material";
import { SetState } from "~/bootstrap/helper/global-types";

interface IAlertMessageProps {
  message: string;
  durationInMs: number;
  open: boolean;
  setOpen: SetState<boolean>;
}

const AlertMessage = (props: IAlertMessageProps) => {
  const { message, durationInMs, open, setOpen } = props;

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={durationInMs} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;

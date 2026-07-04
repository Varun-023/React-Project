import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

function AppModal({
  open,
  title,
  children,
  actions,
  onClose
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {title}
      </DialogTitle>

      <DialogContent dividers>
        {children}
      </DialogContent>

      <DialogActions>
        {actions}
      </DialogActions>
    </Dialog>
  );
}

export default AppModal;

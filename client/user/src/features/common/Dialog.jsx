import Dialog from "@mui/material/Dialog";

export default function CustomDialog({ children, onClose, open, title }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <div className=" p-8">
        <h1 className=" mb-2 text-center text-lg font-bold text-amber-600">{title}</h1>
        {children}
      </div>
    </Dialog>
  );
}

import { Box, Button, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";

export default function Image({ width, height, src, alt }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button onClick={handleClickOpen}>
          <img src={src} alt={alt} width={width} height={height} />
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img src={src} alt={alt} />
        </DialogContent>
      </Dialog>
    </>
  );
}

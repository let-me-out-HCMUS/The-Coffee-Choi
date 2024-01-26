import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ConfirmationDialog from "../../../ui/ConfirmationDialog";

export default function DeleteCategoryDialog({
  categories,
  open,
  handleClose,
}) {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const target = Object.getOwnPropertyNames(formJson);
    setChecked(target);
    console.log(target);
    handleClose();
    setOpenConfirmDialog(true);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    console.log("confirmed that you want to delete ", checked);
    setOpenConfirmDialog(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Xóa danh mục</DialogTitle>
        <DialogContent>
          <FormGroup>
            <Stack
              direction="column"
              spacing={1}
              sx={{
                height: "40vh",
                overflow: "scroll",
              }}
            >
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  id={category.name}
                  name={category.name}
                  label={category.name}
                />
              ))}
            </Stack>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button type="submit">Xóa</Button>
        </DialogActions>
      </Dialog>

      <ConfirmationDialog
        title="Bạn có chắc chắn muốn xóa danh mục này?"
        open={openConfirmDialog}
        handleClose={() => setOpenConfirmDialog(false)}
        onSubmit={handleConfirm}
      >
        <Stack>
          {checked.map((category, index) => (
            <Typography key={index}>{category}</Typography>
          ))}
        </Stack>
      </ConfirmationDialog>
    </>
  );
}

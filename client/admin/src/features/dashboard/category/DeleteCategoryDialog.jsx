import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import ConfirmationDialog from "../../../ui/ConfirmationDialog";

export default function DeleteCategoryDialog({
  categories,
  open,
  handleClose,
}) {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [checked, setChecked] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const target = formData.get("category-to-delete");
    setChecked(target);
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
          <FormControl>
            <RadioGroup
              aria-labelledby="list-of-categories"
              name="category-to-delete"
            >
              {categories.map((category, index) => (
                <FormControlLabel
                  key={index}
                  value={category.name}
                  control={<Radio />}
                  label={category.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button type="submit">Xóa</Button>
        </DialogActions>
      </Dialog>

      <ConfirmationDialog
        title={`Bạn có chắc chắn muốn xóa danh mục "${checked}"?`}
        open={openConfirmDialog}
        handleClose={() => setOpenConfirmDialog(false)}
        onSubmit={handleConfirm}
      ></ConfirmationDialog>
    </>
  );
}

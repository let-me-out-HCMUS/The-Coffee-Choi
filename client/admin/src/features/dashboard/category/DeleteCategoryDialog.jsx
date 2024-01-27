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
import { updateCategory } from "../../../services/apiCategory";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function DeleteCategoryDialog({
  categories,
  open,
  handleClose,
}) {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [checked, setChecked] = useState({});

  const { mutate } = useMutation({
    mutationFn: (data) => {
      updateCategory({ data });
    },
    onSuccess: () => {
      toast.success("Đã  khóa thành công, vui lòng tải lại trang");
    },
    onError: () => {
      toast.error("Khóa thất bại");
    },
  });

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
    
    const target = categories.find((category) => category.name === checked);
    mutate({ ...target, status: false });
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
        <DialogTitle>Khóa danh mục</DialogTitle>
        <DialogContent>
          <FormControl>
            <RadioGroup
              aria-labelledby="list-of-categories"
              name="category-to-delete"
            >
              {categories
                .filter((category) => category.status)
                .map((category, index) => (
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
          <Button type="submit">Khóa</Button>
        </DialogActions>
      </Dialog>

      <ConfirmationDialog
        title={`Bạn có chắc chắn muốn khóa danh mục "${checked}"?`}
        open={openConfirmDialog}
        handleClose={() => setOpenConfirmDialog(false)}
        onSubmit={handleConfirm}
      ></ConfirmationDialog>
    </>
  );
}

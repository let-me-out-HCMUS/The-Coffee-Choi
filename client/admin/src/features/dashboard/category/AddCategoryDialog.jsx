import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { addCategory } from "../../../services/apiCategory";

export default function AddCategoryDialog({ open, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const category = {
      name: formJson.category,
      description: formJson.description,
    };
    console.log(category);
    mutate(category);
    handleClose();
  };

  const { mutate } = useMutation({
    mutationFn: (data) => {
      addCategory({ data });
    },
    onSuccess: () => {
      toast.success("Thêm danh mục thành công, vui lòng tải lại trang");
    },
    onError: () => {
      toast.error("Thêm danh mục thất bại");
    },
  });

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
        <DialogTitle>Thêm danh mục</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="category"
            name="category"
            label="Tên danh mục mới"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Mô tả"
            type="text"
            fullWidth
            multiline
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button type="submit">Thêm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

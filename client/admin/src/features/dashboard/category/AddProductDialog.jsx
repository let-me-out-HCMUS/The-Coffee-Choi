import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import InputFileUpload from "../../../ui/InputFileUpload";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProduct } from "../../../services/apiCategory";

export default function AddProductDialog({ open, handleClose, category }) {
  const [product, setProduct] = useState({});

  const { mutate } = useMutation({
    mutationFn: (data) => {
      addProduct({ data });
    },
    onSuccess: () => {
      toast.success("Thêm sản phẩm thành công, vui lòng tải lại trang");
    },
    onError: () => {
      toast.error("Thêm sản phẩm thất bại");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    const target = Object.assign(formJson, product, {
      sold: 0,
      status: true,
      category: category.name,
    });

    const sendItem = new FormData();
    for (const key in target) {
      sendItem.append(key, target[key]);
    }

    mutate(sendItem);

    setProduct({});
    handleClose();
  };

  const handleUpload = (file) => {
    setProduct({ file });
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
        sx={{
          "& .MuiDialog-paper": {
            width: "50%",
          },
        }}
      >
        <DialogTitle>Thêm sản phẩm</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Tên sản phẩm mới"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            required
            margin="dense"
            id="quantity"
            name="quantity"
            label="Số lượng tồn kho (cái)"
            type="number"
            fullWidth
            variant="standard"
          />

          <TextField
            required
            margin="dense"
            id="price"
            name="price"
            label="Giá bán (đồng)"
            type="number"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            id="discount"
            name="discount"
            label="Giảm giá (%)"
            type="number"
            fullWidth
            autoComplete="0"
            variant="standard"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginY: 1,
            }}
          >
            <Typography>Ảnh:</Typography>
            {product.file && <Typography>{product.file.name}</Typography>}
            <InputFileUpload onUpload={handleUpload} />
          </Box>
          <TextField
            id="description"
            name="description"
            label="Mô tả"
            placeholder="Placeholder"
            fullWidth
            multiline
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

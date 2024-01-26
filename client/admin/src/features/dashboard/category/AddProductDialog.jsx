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

import InputFileUpload from "../../../ui/InputFileUpload";
import { useState } from "react";

export default function AddProductDialog({ open, handleClose }) {
  const [product, setProduct] = useState({
    status: true,
    sold: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    setProduct({
      ...product,
      name: formJson.productName,
      quantity: formJson.quantity,
      price: formJson.price,
      discount: formJson.discount,
      description: formJson.description,
    });
    console.log(product);

    // upload image

    // clear product
    setProduct({});
    handleClose();
  };

  const handleUpload = (file, data) => {
    setProduct({ ...product, image: file.name, dataImage: data });
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
            id="productName"
            name="productName"
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
            {product.image ?? <Typography>{product.image}</Typography>}
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

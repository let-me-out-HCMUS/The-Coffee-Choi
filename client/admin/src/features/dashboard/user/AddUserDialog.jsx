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

import { signUp } from "../../../services/apiUser";
import PasswordMeterInput from "../../../ui/PasswordMeterInput";

export default function AddCategoryDialog({ open, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());

    if (formJson.password !== formJson.repassword) {
      toast.error("Mật khẩu không khớp");
      return;
    }

    if (formJson.password.length < 8) {
      toast.error("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }

    const admin = Object.assign({ role: "admin" }, formJson);
    mutate(admin);
    handleClose();
  };

  const { mutate } = useMutation({
    mutationFn: (data) => {
      signUp(data);
    },
    onSuccess: () => {
      toast.success("Thêm admin thành công, vui lòng tải lại trang");
    },
    onError: () => {
      toast.error("Thêm admin thất bại");
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
        <DialogTitle>Thêm admin</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Tên"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <PasswordMeterInput />
          <TextField
            required
            margin="dense"
            id="repassword"
            name="repassword"
            label="Nhập lại mật khẩu"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="phone"
            name="phone"
            label="Số điện thoại"
            type="phone"
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

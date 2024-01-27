import { useForm } from "react-hook-form";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
export default function FormAdd({ addUser }) {
  const { register, handleSubmit } = useForm();

  const [role, setRole] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setRole(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(addUser)}>
        <div className="mb-4">
          <TextField
            autoFocus
            required
            margin="dense"
            label="Tên người dùng"
            fullWidth
            variant="standard"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <TextField
            autoFocus
            required
            margin="dense"
            label="Email"
            fullWidth
            variant="standard"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
          <TextField
            autoFocus
            required
            margin="dense"
            label="Mật khẩu"
            fullWidth
            variant="standard"
            {...register("password", { required: true })}
          />
        </div>
        <div className="mb-4">
          <TextField
            autoFocus
            required
            margin="dense"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            {...register("address")}
          />
        </div>
        <div className="mb-4">
          {/* <label className="block mb-2 text-sm font-bold">Quyền</label> */}
          {/* <select
            className="w-full px-3 py-2 leading-tight border rounded  appearance-none focus:outline-none focus:shadow-outline"
            {...register("role")}
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select> */}
          <InputLabel id="role-label">Vai trò</InputLabel>
          <Select
            fullWidth
            labelId="role-label"
            id="role"
            value={role}
            label="Vai trò"
            onChange={handleChange}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </div>
        <div className="mb-4">
          <TextField
            autoFocus
            required
            margin="dense"
            label="Tiền nạp"
            fullWidth
            variant="standard"
            {...register("money", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-amber-700 rounded hover:bg-amber-500 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Thêm
          </button>
        </div>
      </form>
    </>
  );
}

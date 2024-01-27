import { LinearProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function PasswordMeterInput() {
  const [password, setPassword] = useState("");

  const minLength = 12;
  return (
    <>
      <TextField
        type="password"
        id="password"
        name="password"
        fullWidth
        required
        label="Mật khẩu"
        margin="dense"
        variant="standard"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <LinearProgress
        variant="determinate"
        size="sm"
        value={Math.min((password.length * 100) / minLength, 100)}
        sx={{
          bgcolor: "background.level3",
          color: "hsl(var(--hue) 80% 40%)",
        }}
      />
      <Typography
        level="body-xs"
        sx={{
          alignSelf: "flex-end",
          color:
            password.length < 3
              ? "red"
              : password.length < 6
              ? "orange"
              : password.length < 10
              ? "green"
              : "lightGreen",
        }}
      >
        {password.length < 3 && "Mật khẩu quá yếu"}
        {password.length >= 3 && password.length < 6 && "Mật khẩu yếu"}
        {password.length >= 6 && password.length < 10 && "Mật khẩu mạnh"}
        {password.length >= 10 && "Mật khẩu rất mạnh"}
      </Typography>
    </>
  );
}

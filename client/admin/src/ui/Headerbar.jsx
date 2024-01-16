import { useContext, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import { Switcher } from "../features/darkmode/Switcher";
import { defaultTheme, darkTheme } from "./Theme";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Headerbar() {
  const { setTheme } = useContext(ThemeContext);
  const [isDarkmode, setIsDarkmode] = useState(true);

  useEffect(
    function () {
      setTheme(isDarkmode ? darkTheme : defaultTheme);
    },
    [isDarkmode, setTheme]
  );

  return (
    <Box
      sx={{
        gap: 4,
        mx: 5,
        my: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Switcher defaultChecked onClick={() => setIsDarkmode(!isDarkmode)} />
      <Button
        sx={{
          display: "flex",
          flexDirection: "row ",
          gap: 1,
        }}
      >
        <LogoutIcon />
        <Typography>Đăng xuất</Typography>
      </Button>
    </Box>
  );
}

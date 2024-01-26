import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AppLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { defaultTheme } from "./DefaultTheme";

function AppLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Outlet />
    </ThemeProvider>
  );
}

export default AppLayout;

/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Sidebar from "../../ui/Sidebar";
import Headerbar from "../../ui/Headerbar";

export default function DashboardLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={2}>
        <Grid item md={2.5}>
          <Sidebar />
        </Grid>
        <Grid item md={9.5}>
          <Headerbar />
          {children}
          {/* footer */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

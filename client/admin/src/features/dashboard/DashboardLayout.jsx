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

      <Grid container spacing={1}>
        <Grid item md={2.5} sm={1.5} xs={1}>
          <Sidebar />
        </Grid>
        <Grid item md={9.5} sm={10.5} xs={11}>
          <Headerbar />
          {children}
          {/* footer */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

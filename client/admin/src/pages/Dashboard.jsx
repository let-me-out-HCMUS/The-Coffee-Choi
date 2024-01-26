import { useContext } from "react";
import { CssBaseline, ThemeProvider, Typography, Grid } from "@mui/material";

import Sidebar from "../ui/Sidebar";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={2}>
        <Grid item md={2.5}>
          <Sidebar />
        </Grid>
        <Grid item md={9.5}>
          <Typography>Dashboard</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

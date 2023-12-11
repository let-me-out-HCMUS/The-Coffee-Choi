import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Sidebar from "../ui/Sidebar";

import { darkTheme } from "../ui/darkTheme";

export default function Dashboard() {
  return (
    <ThemeProvider theme={darkTheme}>
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

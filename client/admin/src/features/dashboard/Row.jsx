import { Grid } from "@mui/material";

export default function Row({ children }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Grid>
  );
}

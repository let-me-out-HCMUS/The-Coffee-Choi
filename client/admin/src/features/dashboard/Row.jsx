import { Grid } from "@mui/material";

export default function Row({ children, sx }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      {children}
    </Grid>
  );
}

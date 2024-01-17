import { Box, Grid } from "@mui/material";

import { grey } from "@mui/material/colors";

function Stat({ icon, title, value, color }) {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: grey[900],
        borderRadius: "10px",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 64,
          width: 64,
          borderRadius: "50%",
          bgcolor: color,
          color: "white",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", marginX: 2 }}>
        <Box sx={{ fontSize: 16, fontWeight: "Medium" }}>{title}</Box>
        <Box sx={{ fontSize: 24 }}>{value}</Box>
      </Box>
    </Grid>
  );
}

export default Stat;

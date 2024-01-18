import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

import useMediaSize from "../../hooks/useMediaSize";

function Stat({ icon, title, value, color }) {
  const currentMedia = useMediaSize();

  const titleSize = currentMedia.md ? 16 : 8;
  const valueSize = currentMedia.md ? 24 : 16;

  const iconPadding = currentMedia.md ? 2 : 1;
  const iconSize = currentMedia.md ? 64 : 32;

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
        padding: iconPadding,
        margin: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: iconSize,
          width: iconSize,
          borderRadius: "50%",
          bgcolor: color,
          color: "white",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", marginX: 2 }}>
        <Box sx={{ fontSize: titleSize, fontWeight: "Medium" }}>{title}</Box>
        <Box sx={{ fontSize: valueSize }}>{value}</Box>
      </Box>
    </Grid>
  );
}

export default Stat;

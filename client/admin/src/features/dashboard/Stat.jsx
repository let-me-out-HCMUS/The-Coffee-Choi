import { Box, Typography } from "@mui/material";

import useMediaSize from "../../hooks/useMediaSize";
import DashboardItem from "./DashboardItem";

function Stat({ icon, title, value, color }) {
  const currentMedia = useMediaSize();

  const titleSize = currentMedia.md ? 16 : 8;
  const valueSize = currentMedia.md ? 24 : 16;
  const iconSize = currentMedia.md ? 64 : 32;

  return (
    <DashboardItem>
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
        <Typography
          sx={{
            fontSize: titleSize,
            fontWeight: "Medium",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: valueSize }}>{value}</Typography>
      </Box>
    </DashboardItem>
  );
}

export default Stat;

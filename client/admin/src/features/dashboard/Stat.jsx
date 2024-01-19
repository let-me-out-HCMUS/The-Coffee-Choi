import { Box, Typography } from "@mui/material";

import useMediaSize from "../../hooks/useMediaSize";

function Stat({ icon, title, value, color }) {
  const currentMedia = useMediaSize();

  const titleSize = currentMedia.md ? 16 : 8;
  const valueSize = currentMedia.md ? 24 : 16;
  const iconSize = currentMedia.md ? 64 : 28;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: iconSize,
          width: iconSize,
          bgcolor: color,
          marginRight: "1rem",
          borderRadius: "50%",
          color: "white",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
    </>
  );
}

export default Stat;

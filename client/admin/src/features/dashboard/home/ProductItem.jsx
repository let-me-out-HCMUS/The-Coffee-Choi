import { Box, Typography } from "@mui/material";
import useMediaSize from "../../../hooks/useMediaSize";

const top5Color = ["#FFC542", "#FF575F", "#3A77FF", "#1BC5BD", "#8950FC"];

export default function ProductItem({ product, top }) {
  const currentMedia = useMediaSize();
  const iconSize = currentMedia.md ? 64 : 28;
  const fontSize = currentMedia.md ? 38 : 22;
  const productSizeVariant = currentMedia.md ? "h4" : "h6";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: iconSize,
          width: iconSize,
          bgcolor: top5Color[top - 1],
          borderRadius: "50%",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: fontSize }}>{top}</Typography>
      </Box>

      <Typography variant={productSizeVariant}>{product.name}</Typography>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import {
  red,
  green,
  blue,
  yellow,
  pink,
  purple,
  cyan,
  lime,
} from "@mui/material/colors";
import useMediaSize from "../../../hooks/useMediaSize";

const topColor = [
  yellow[700],
  green[700],
  blue[700],
  red[700],
  pink[700],
  purple[700],
  cyan[700],
  lime[700],
];

export default function ProductItem({ product, top }) {
  const currentMedia = useMediaSize();
  const iconSize = currentMedia.md ? 32 : 28;
  const fontSize = currentMedia.md ? 18 : 10;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: iconSize,
          width: iconSize,
          bgcolor: topColor[top - 1],
          borderRadius: "50%",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: fontSize }}>{top}</Typography>
      </Box>

      <Typography sx={{ fontSize: fontSize }}>{product.name}</Typography>

      <Typography sx={{ fontSize: fontSize }}>{product.quantity}</Typography>
    </>
  );
}

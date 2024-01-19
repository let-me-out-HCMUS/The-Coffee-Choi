import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import useMediaSize from "../../hooks/useMediaSize";

export default function DashboardItem({ children, md, sm, sx }) {
  const currentMedia = useMediaSize();
  const iconPadding = currentMedia.md ? 1.5 : 0.5;

  return (
    <Grid
      md={md}
      sm={sm}
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
        ...sx,
      }}
    >
      {children}
    </Grid>
  );
}

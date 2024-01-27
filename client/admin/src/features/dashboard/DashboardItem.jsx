import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import useMediaSize from "../../hooks/useMediaSize";
import styled from "@emotion/styled";

const Item = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
  borderRadius: "10px",
  margin: 5,
  marginRight: 0,
  marginLeft: 0,
}));

export default function DashboardItem({ children, md, sm, sx }) {
  const currentMedia = useMediaSize();
  const iconPadding = currentMedia.md ? 1.5 : 0.5;

  return (
    <Item
      md={md}
      sm={sm}
      item
      sx={{
        padding: iconPadding,
        ...sx,
      }}
    >
      {children}
    </Item>
  );
}

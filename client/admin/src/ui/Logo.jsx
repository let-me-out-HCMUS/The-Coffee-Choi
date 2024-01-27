/* eslint-disable react/prop-types */
import { Avatar, Box, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "./Theme";
import useMediaSize from "../hooks/useMediaSize";

export default function Logo(props) {
  const currentMedia = useMediaSize();

  const imageSize = currentMedia.md ? 96 : 48;
  const fontPadding = currentMedia.md ? 0 : 2;
  const fontSize = currentMedia.md ? 18 : 6;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ...props.sx,
        }}
      >
        <Avatar src="/tcc.png" sx={{ width: imageSize, height: imageSize }} />
        <Typography
          component="h2"
          color="primary.main"
          sx={{
            marginBottom: 2,
            paddinggX: fontPadding,
            fontSize: fontSize,
          }}
        >
          THE COFFEE CHÒI
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

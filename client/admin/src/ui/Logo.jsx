/* eslint-disable react/prop-types */
import { Avatar, Box, ThemeProvider, Typography } from "@mui/material";
import { defaultTheme } from "./Theme";

export default function Logo(props) {
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
        <Avatar src="/tcc.png" sx={{ width: 96, height: 96 }} />
        <Typography
          component="h2"
          color="primary.main"
          sx={{ marginBottom: 2 }}
        >
          THE COFFEE CHÒI
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

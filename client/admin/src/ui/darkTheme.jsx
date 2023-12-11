import { createTheme } from "@mui/material";
import { defaultTheme } from "./DefaultTheme";

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "dark",
  },
});

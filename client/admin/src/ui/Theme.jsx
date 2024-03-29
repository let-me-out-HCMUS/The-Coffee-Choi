import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Comfortaa from "../fonts/Comfortaa-VariableFont_wght.ttf";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#b36337",
    },
    info: {
      main: grey[900],
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "comfortaa",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face{
        font-family: 'comfortaa';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('comfortaa'), url(${Comfortaa}), format('ttf');
    }`,
    },
  },
});

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#f8b996",
    },
  },
});

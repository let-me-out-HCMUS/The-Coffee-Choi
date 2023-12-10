import { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { grey } from "@mui/material/colors";

import Comfortaa from "../../fonts/Comfortaa-VariableFont_wght.ttf";

import { Copyright } from "../../ui/Copyright";
import { useLogin } from "./useLogin";
import Logo from "../../ui/Logo";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#f8b996",
    },
    info: {
      main: grey[900],
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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setEmail(data.get("email"));
    setPassword(data.get("password"));

    if (!email || !password) return;

    login({ email, password });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/biglogo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Logo />
            <Typography component="h1" variant="h5">
              Sign in to your account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                label="Email Address"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? (
                  <CircularProgress color="info" size="24px" />
                ) : (
                  "Sign in"
                )}
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

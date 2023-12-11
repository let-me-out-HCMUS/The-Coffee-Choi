import { ThemeProvider } from "@mui/material";
import LoginForm from "../features/authentication/LoginForm";
import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function Login() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  );
}

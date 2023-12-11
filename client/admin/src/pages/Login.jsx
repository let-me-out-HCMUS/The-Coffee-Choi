import { ThemeProvider } from "@mui/material";
import LoginForm from "../features/authentication/LoginForm";
import { defaultTheme } from "../ui/DefaultTheme";

export default function Login() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginForm />
    </ThemeProvider>
  );
}

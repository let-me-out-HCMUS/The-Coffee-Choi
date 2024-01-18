import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export default function useMediaSize() {
  const theme = useTheme();
  const matches = {
    sm: useMediaQuery(theme.breakpoints.down("md")),
    md: useMediaQuery(theme.breakpoints.up("md")),
  };

  return matches;
}

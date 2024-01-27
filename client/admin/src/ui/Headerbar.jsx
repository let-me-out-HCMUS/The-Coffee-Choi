import { useContext, useEffect } from "react";
import { Typography, Button, Paper, CircularProgress } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import { Switcher } from "../features/darkmode/Switcher";
import { defaultTheme, darkTheme } from "./Theme";
import LogoutIcon from "@mui/icons-material/Logout";
import useMediaSize from "../hooks/useMediaSize";
import { useLogout } from "../features/authentication/useLogout";
import { getCurrentUser } from "../services/apiUser";
import { useQuery } from "@tanstack/react-query";

export default function Headerbar() {
  const { setTheme, isDarkmode, setIsDarkmode } = useContext(ThemeContext);
  const { logout, isLoading } = useLogout();

  const currentMedia = useMediaSize();

  const fontSize = currentMedia.md ? 16 : 8;
  const iconSize = currentMedia.md ? "" : "small";

  const handleLogout = () => {
    logout();
  };

  useEffect(
    function () {
      setTheme(isDarkmode ? darkTheme : defaultTheme);
    },
    [isDarkmode, setTheme]
  );

  const { isFetchLoading, error, data } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  if (isFetchLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const username = data?.data.user.name;

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          background: "none",
          boxShadow: "none",
          padding: 1,
          paddingRight: 5,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            marginRight: 2,
            fontSize: fontSize,
          }}
        >
          Xin chào, {username}
        </Typography>

        <Switcher defaultChecked onClick={() => setIsDarkmode(!isDarkmode)} />
        <Button
          sx={{
            display: "flex",
            flexDirection: "row ",
            gap: 1,
          }}
          onClick={handleLogout}
        >
          <LogoutIcon fontSize={iconSize} />
          {isLoading ? (
            <CircularProgress color="info" size="24px" />
          ) : (
            <Typography fontSize={fontSize}>Đăng xuất</Typography>
          )}
        </Button>
      </Paper>
    </>
  );
}

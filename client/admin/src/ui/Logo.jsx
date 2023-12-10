import { Avatar, Typography } from "@mui/material";

export default function Logo() {
  return (
    <>
      <Avatar src="/tcc.png" sx={{ width: 96, height: 96 }} />
      <Typography component="h2" color="primary.main" sx={{ marginBottom: 2 }}>
        THE COFFEE CHÒI
      </Typography>
    </>
  );
}

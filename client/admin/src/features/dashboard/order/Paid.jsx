import { Typography } from "@mui/material";
import styled from "@emotion/styled";

export const Paid = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderRadius: 50,
  padding: 5,
}));
export const Unpaid = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.warning.light,
  borderRadius: 50,
  padding: 5,
}));
export const Canceled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.error.dark,
  borderRadius: 50,
  padding: 5,
}));

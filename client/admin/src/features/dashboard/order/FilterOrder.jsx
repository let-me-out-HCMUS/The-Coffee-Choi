import { Button, FormControl } from "@mui/material";

export default function FilterOrder({ setFilter }) {
  // const handleChange = (event) => {
  //   setFilter(event.target.value);
  // };
  return (
    <FormControl
      sx={{
        width: 280,
      }}
    >
      <Button variant="contained" color="primary">
        Đã thanh toán
      </Button>
      <Button variant="contained" color="primary">
        Chưa
      </Button>
    </FormControl>
  );
}

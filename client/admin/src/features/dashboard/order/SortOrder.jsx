import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SortOrder({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <FormControl
      sx={{
        width: 280,
      }}
    >
      <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Sắp xếp"
        onChange={handleChange}
      >
        <MenuItem value={"id"}>Sắp xếp theo mã (A-Z)</MenuItem>
        <MenuItem value={"name"}>Sắp xếp theo tên (A-Z)</MenuItem>
        <MenuItem value={"priceDown"}>Sắp xếp giá tiền (giảm dần)</MenuItem>
        <MenuItem value={"status"}>Trạng thái</MenuItem>
      </Select>
    </FormControl>
  );
}

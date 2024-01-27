import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SortCategory({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <FormControl
      sx={{
        width: 340,
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
        <MenuItem value={"name"}>Sắp xếp theo tên (A-Z)</MenuItem>
        <MenuItem value={"quantity"}>Sắp xếp theo số lượng (giảm dần)</MenuItem>
        <MenuItem value={"priceUp"}>Sắp xếp theo giá (thấp đến cao)</MenuItem>
        <MenuItem value={"priceDown"}>Sắp xếp theo giá (cao đến thấp)</MenuItem>
      </Select>
    </FormControl>
  );
}

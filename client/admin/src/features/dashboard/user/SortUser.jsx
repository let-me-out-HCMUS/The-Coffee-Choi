import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SortUser({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <FormControl
      sx={{
        width: 280,
      }}>
      <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Sắp xếp"
        onChange={handleChange}>
        <MenuItem value={"name"}>Sắp xếp theo tên (A-Z)</MenuItem>
        <MenuItem value={"email"}>Sắp xếp theo email (A-Z)</MenuItem>
      </Select>
    </FormControl>
  );
}

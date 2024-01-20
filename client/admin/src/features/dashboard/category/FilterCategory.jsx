import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function FilterCategory() {
  const [sort, setSort] = useState("name");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sắp xếp</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Sắp xếp"
        onChange={handleChange}
      >
        <MenuItem value={"name"}>Sắp xếp theo tên (A-Z)</MenuItem>
        <MenuItem value={"category"}>Sắp xếp theo danh mục (A-Z)</MenuItem>
        <MenuItem value={"priceUp"}>Sắp xếp theo giá (thấp đến cao)</MenuItem>
        <MenuItem value={"priceDown"}>Sắp xếp theo giá (cao đến thấp)</MenuItem>
      </Select>
    </FormControl>
  );
}

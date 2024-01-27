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
        <MenuItem value={"createdTime"}>Sắp xếp theo ngày (Giảm dần)</MenuItem>
        <MenuItem value={"totalMoneyUp"}>Sắp xếp giá tiền (tăng dần)</MenuItem>
        <MenuItem value={"totalMoneyDown"}>
          Sắp xếp giá tiền (giảm dần)
        </MenuItem>
      </Select>
    </FormControl>
  );
}

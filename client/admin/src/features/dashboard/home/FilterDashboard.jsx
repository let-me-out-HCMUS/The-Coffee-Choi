import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function FilterDashboard({ filter, handleChange }) {
  return (
    <ToggleButtonGroup
      exclusive
      value={filter}
      onChange={handleChange}
      aria-label="set filter"
      color="primary"
    >
      <ToggleButton value={1} aria-label="today">
        Ngày
      </ToggleButton>
      <ToggleButton value={7} aria-label="week">
        Tuần
      </ToggleButton>
      <ToggleButton value={30} aria-label="month">
        Tháng
      </ToggleButton>
      <ToggleButton value={365} aria-label="year">
        Năm
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function FilterUser({ filter, setFilter }) {
  const handleChange = (event, newFilter) => {
    if (newFilter == null) {
      setFilter("all");
    }

    setFilter(newFilter);
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={filter}
      onChange={handleChange}
      aria-label="set filter"
      color="primary"
    >
      <ToggleButton value="admin" aria-label="paid">
        Quản trị viên
      </ToggleButton>
      <ToggleButton value="user" aria-label="unpaid">
        Người dùng
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

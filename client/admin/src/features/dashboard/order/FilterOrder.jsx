import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function FilterOrder({ filter, setFilter }) {
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
      <ToggleButton value="paid" aria-label="paid">
        Đã thanh toán
      </ToggleButton>
      <ToggleButton value="unpaid" aria-label="unpaid">
        Chưa thanh toán
      </ToggleButton>
      <ToggleButton value="canceled" aria-label="canceled">
        Đã hủy
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

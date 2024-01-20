import { Typography } from "@mui/material";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import FilterCategory from "../features/dashboard/category/FilterCategory";
import DashboardItem from "../features/dashboard/DashboardItem";
import TableCategory from "../features/dashboard/category/TableCategory";

export default function Category() {
  return (
    <DashboardLayout>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Danh sách danh mục</Typography>
        <DashboardItem md={4} sm={12}>
          <FilterCategory />
        </DashboardItem>
      </Row>

      <Row>
        <DashboardItem md={12} sm={12}>
          <TableCategory />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

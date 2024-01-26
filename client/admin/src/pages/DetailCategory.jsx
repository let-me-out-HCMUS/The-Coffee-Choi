import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import DashboardItem from "../features/dashboard/DashboardItem";
import { Button, Typography } from "@mui/material";
import SortCategory from "../features/dashboard/category/SortCategory";
import TableCategory from "../features/dashboard/category/TableCategory";
import { useState } from "react";

export default function DetailCategory() {
  const [sort, setSort] = useState("name");
  return (
    <DashboardLayout>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DashboardItem
          md={12}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Danh sách danh mục</Typography>
          <Button variant="contained" color="primary">
            Thêm sản phẩm
          </Button>
          <SortCategory sort={sort} setSort={setSort} />
        </DashboardItem>
      </Row>

      <Row>
        <DashboardItem md={12} sm={12}>
          <TableCategory sort={sort} />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

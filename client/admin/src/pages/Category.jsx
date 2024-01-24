import { useState } from "react";
import { Button, Typography } from "@mui/material";

import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import SortCategory from "../features/dashboard/category/SortCategory";
import DashboardItem from "../features/dashboard/DashboardItem";
import TableCategory from "../features/dashboard/category/TableCategory";

export default function Category() {
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
            Thêm danh mục
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

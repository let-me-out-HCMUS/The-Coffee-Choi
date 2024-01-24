import DashboardLayout from "../DashboardLayout";
import Row from "../Row";
import DashboardItem from "../DashboardItem";
import { Button, Typography } from "@mui/material";
import SortCategory from "./SortCategory";
import TableCategory from "./TableCategory";
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

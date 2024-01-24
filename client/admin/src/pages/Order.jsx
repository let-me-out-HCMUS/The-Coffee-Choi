import { Typography } from "@mui/material";
import DashboardItem from "../features/dashboard/DashboardItem";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import SortOrder from "../features/dashboard/order/SortOrder";
import TableOrder from "../features/dashboard/order/TableOrder";
import { useState } from "react";
import FilterOrder from "../features/dashboard/order/FilterOrder";

export default function Order() {
  const [sort, setSort] = useState("name");
  const [filter, setFilter] = useState("all"); // all, paid, unpaid
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
          <Typography variant="h5">Danh sách đơn hàng</Typography>
          <FilterOrder setFilter={setFilter} />
          <SortOrder sort={sort} setSort={setSort} filter={filter} />
        </DashboardItem>
      </Row>

      <Row>
        <DashboardItem md={12} sm={12}>
          <TableOrder sort={sort} />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

import { Typography } from "@mui/material";
import DashboardItem from "../features/dashboard/DashboardItem";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
// import SortOrder from "../features/dashboard/order/SortOrder";
import SortUser from "../features/dashboard/user/SortUser";
// import TableOrder from "../features/dashboard/order/TableOrder";
import TableUser from "../features/dashboard/user/TableUser";
import { useState } from "react";
// import FilterOrder from "../features/dashboard/order/FilterOrder";
import FilterUser from "../features/dashboard/user/FilterUser";

export default function User() {
  const [sort, setSort] = useState("name");
  const [filter, setFilter] = useState("all"); // all, admin, user
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
          <Typography variant="h5">Tài khoản</Typography>
          <FilterUser filter={filter} setFilter={setFilter} />
          <SortUser sort={sort} setSort={setSort} filter={filter} />
        </DashboardItem>
      </Row>

      <Row>
        <DashboardItem md={12} sm={12}>
          <TableUser sort={sort} filter={filter} />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

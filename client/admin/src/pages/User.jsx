import { useState } from "react";
import { CircularProgress, Typography } from "@mui/material";

import DashboardItem from "../features/dashboard/DashboardItem";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import SortUser from "../features/dashboard/user/SortUser";
import TableUser from "../features/dashboard/user/TableUser";
import FilterUser from "../features/dashboard/user/FilterUser";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../services/apiUser";

export default function User() {
  const [sort, setSort] = useState("name");
  const [filter, setFilter] = useState("all"); // all, admin, user

  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const users = data.data.users;

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
          <TableUser users={users} sort={sort} filter={filter} />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

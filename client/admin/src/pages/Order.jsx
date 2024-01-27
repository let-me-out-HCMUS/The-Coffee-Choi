import { CircularProgress, Typography } from "@mui/material";
import DashboardItem from "../features/dashboard/DashboardItem";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import SortOrder from "../features/dashboard/order/SortOrder";
import TableOrder from "../features/dashboard/order/TableOrder";
import { useState } from "react";
import FilterOrder from "../features/dashboard/order/FilterOrder";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../services/apiOrder";

export default function Order() {
  const [sort, setSort] = useState("createdTime");
  const [filter, setFilter] = useState("all"); // all, paid, unpaid

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const orders = data.orders.orders;

  return (
    orders && (
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
            <Typography variant="h5">Đơn hàng</Typography>
            <FilterOrder filter={filter} setFilter={setFilter} />
            <SortOrder sort={sort} setSort={setSort} filter={filter} />
          </DashboardItem>
        </Row>

        <Row>
          <DashboardItem md={12} sm={12}>
            <TableOrder orders={orders} sort={sort} filter={filter} />
          </DashboardItem>
        </Row>
      </DashboardLayout>
    )
  );
}

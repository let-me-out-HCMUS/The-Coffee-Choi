import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";

import DashboardLayout from "../features/dashboard/DashboardLayout";
import PieChart from "../features/dashboard/home/PieChart";
import Stats from "../features/dashboard/home/Status";
import DashboardItem from "../features/dashboard/DashboardItem";
import Row from "../features/dashboard/Row";
import LineChart from "../features/dashboard/home/LineChart";
import TopProduct from "../features/dashboard/home/TopProduct";
import { getOrders } from "../services/apiOrder";
import { useState } from "react";
import FilterDashboard from "../features/dashboard/home/FilterDashboard";

import { datediff } from "../utils/helpers";

export default function Dashboard() {
  const [filter, setFilter] = useState(null);

  const handleChange = (event, newFilter) => {
    if (newFilter == null) {
      setFilter(null);
    }

    setFilter(newFilter);
  };

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
  const filteredOrders = data?.orders.orders
    .filter((order) => order.status === "Completed")
    .filter((order) => {
      const today = new Date();
      return filter !== null
        ? datediff(new Date(order.createdTime), today) <= filter
        : true;
    });

  const orders = data?.orders.orders.filter(
    (order) => order.status === "Completed"
  );

  return (
    orders && (
      <DashboardLayout>
        <Row
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <FilterDashboard filter={filter} handleChange={handleChange} />
        </Row>

        <Row>
          <Stats
            orders={data.count}
            sales={filteredOrders.reduce(
              (acc, order) => acc + order.totalMoney,
              0
            )}
          />
        </Row>

        <Row>
          <DashboardItem md={5.25} sm={5.25}>
            <PieChart orders={filteredOrders} />
          </DashboardItem>

          <DashboardItem md={6.5} sm={6.5}>
            <TopProduct />
          </DashboardItem>
        </Row>

        <Row>
          <DashboardItem md={12} sm={12}>
            <LineChart orders={orders} />
          </DashboardItem>
        </Row>
      </DashboardLayout>
    )
  );
}

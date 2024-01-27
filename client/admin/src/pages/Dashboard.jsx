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

export default function Dashboard() {
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
  const sales = orders.reduce((acc, order) => acc + order.totalMoney, 0);

  return (
    orders && (
      <DashboardLayout>
        <Row>
          <Stats orders={data.count} customers={20} sales={sales} />
        </Row>

        <Row>
          <DashboardItem md={6.5} sm={6.5}>
            <PieChart />
          </DashboardItem>

          <DashboardItem md={5.25} sm={5.25}>
            <TopProduct />
          </DashboardItem>
        </Row>

        <Row>
          <DashboardItem md={12} sm={12}>
            <LineChart />
          </DashboardItem>
        </Row>
      </DashboardLayout>
    )
  );
}

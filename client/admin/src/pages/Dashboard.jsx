import DashboardLayout from "../features/dashboard/DashboardLayout";
import PieChart from "../features/dashboard/PieChart";
import Stats from "../features/dashboard/Status";
import DashboardItem from "../features/dashboard/DashboardItem";
import Row from "../features/dashboard/Row";
import LineChart from "../features/dashboard/LineChart";

const mock = {
  orders: [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
  ],
  sales: 94912929000,
  AvgOrderSales: 100,
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Row>
        <Stats
          orders={mock.orders}
          customers={mock.customers}
          sales={mock.sales}
          AvgOrderSales={mock.AvgOrderSales}
        />
      </Row>

      <DashboardItem md={5} sm={6}>
        <PieChart />
      </DashboardItem>

      <DashboardItem md={12} sm={12}>
        <LineChart />
      </DashboardItem>
    </DashboardLayout>
  );
}

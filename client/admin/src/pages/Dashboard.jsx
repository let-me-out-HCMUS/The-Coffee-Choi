import DashboardLayout from "../features/dashboard/DashboardLayout";
import PieChart from "../features/dashboard/PieChart";
import Stats from "../features/dashboard/Status";
import DashboardItem from "../features/dashboard/DashboardItem";
import Row from "../features/dashboard/Row";
import LineChart from "../features/dashboard/LineChart";
import Top5Product from "../features/dashboard/Top5Product";

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
  sales: 9491,
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

      <Row>
        <DashboardItem md={5.5} sm={5.5}>
          <PieChart />
        </DashboardItem>

        <DashboardItem md={6} sm={6}>
          <Top5Product />
        </DashboardItem>
      </Row>

      <Row>
        <DashboardItem md={12} sm={12}>
          <LineChart />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

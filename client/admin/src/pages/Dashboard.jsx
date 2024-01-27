import DashboardLayout from "../features/dashboard/DashboardLayout";
import PieChart from "../features/dashboard/home/PieChart";
import Stats from "../features/dashboard/home/Status";
import DashboardItem from "../features/dashboard/DashboardItem";
import Row from "../features/dashboard/Row";
import LineChart from "../features/dashboard/home/LineChart";
import TopProduct from "../features/dashboard/home/TopProduct";

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
  );
}

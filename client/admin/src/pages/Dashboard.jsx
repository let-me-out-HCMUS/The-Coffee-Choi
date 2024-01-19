import DashboardLayout from "../features/dashboard/DashboardLayout";
import PieChart from "../features/dashboard/PieChart";
import Stats from "../features/dashboard/Status";
import DashboardItem from "../features/dashboard/DashboardItem";

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
  sales: 1000,
  AvgOrderSales: 100,
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardItem
        md={12}
        sm={12}
        sx={{
          backgroundColor: "none",
          justifyContent: "space-between ",
          margin: 0,
          padding: 0,
        }}
      >
        <Stats
          orders={mock.orders}
          customers={mock.customers}
          sales={mock.sales}
          AvgOrderSales={mock.AvgOrderSales}
        />
      </DashboardItem>

      <DashboardItem md={4} sm={6}>
        <PieChart />
      </DashboardItem>
    </DashboardLayout>
  );
}

import DashboardLayout from "../features/dashboard/DashboardLayout";
import Stats from "../features/dashboard/Status";

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
      <Stats
        orders={mock.orders}
        customers={mock.customers}
        sales={mock.sales}
        AvgOrderSales={mock.AvgOrderSales}
      />
    </DashboardLayout>
  );
}

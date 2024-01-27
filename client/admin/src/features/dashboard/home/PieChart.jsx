import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ orders }) {
  const orderItems = orders?.map((order) => order.orderItems).flat();
  const itemSet = new Set(orderItems.map((item) => item.product.name));
  const preprocess = Array.from(itemSet).map((item) => {
    return {
      name: item,
      quantity: orderItems
        .filter((orderItem) => orderItem.product.name === item)
        .reduce((acc, orderItem) => acc + orderItem.quantity, 0),
    };
  });

  const data = {
    labels: preprocess.map((item) => item.name),
    datasets: [
      {
        label: "Số lượng đã bán",
        data: preprocess.map((item) => item.quantity),
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

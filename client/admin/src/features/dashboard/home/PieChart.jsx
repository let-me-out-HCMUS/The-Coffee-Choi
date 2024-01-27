import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  red,
  green,
  blue,
  yellow,
  pink,
  purple,
  cyan,
  lime,
} from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const baseColor = [
  yellow[700],
  green[700],
  blue[700],
  red[700],
  pink[700],
  purple[700],
  cyan[700],
  lime[700],
];

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
        backgroundColor: baseColor,
        borderColor: baseColor,
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

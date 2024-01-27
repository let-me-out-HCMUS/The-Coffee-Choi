import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

export default function LineChart({ orders }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu (VNĐ)",
        data: labels.map((_, index) => {
          const totalSale = orders
            .filter((order) => {
              const date = new Date(order.createdTime);
              return (
                date.getMonth() === index &&
                date.getFullYear() === new Date().getFullYear()
              );
            })
            .map((order) => order.totalMoney)
            .reduce((acc, order) => acc + order, 0);
          return totalSale;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}

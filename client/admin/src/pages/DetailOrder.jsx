import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import Image from "../ui/Image";

import { Paid, Unpaid, Canceled } from "../features/dashboard/order/Paid";

const columns = [
  {
    id: "image",
    label: "Sản phẩm",
    align: "center",
    minWidth: 150,
    format: (value) => (
      <Image src={value} width={75} height={75} alt="Sản phẩm" />
    ),
  },
  { id: "name", label: "Tên", minWidth: 200 },
  {
    id: "quantity",
    label: "Số lượng",
    minWidth: 100,
    align: "center",
  },
  {
    id: "price",
    label: "Giá",
    minWidth: 170,
    align: "right",
    format: (value) => formatCurrency(value),
  },
  {
    id: "description",
    label: "Mô tả",
    minWidth: 300,
    align: "right",
    format: (toppings, size) => `${toppings} - Size ${size}`,
  },
];

const formatStatus = (status) => {
  switch (status) {
    case "Completed":
      return <Paid>{status}</Paid>;
    case "Pending":
      return <Unpaid>{status}</Unpaid>;
    case "Canceled":
      return <Canceled>{status}</Canceled>;
    default:
      return status;
  }
};

export default function DetailOrder() {
  const { id } = useParams();
  const status = "Completed";

  const products = [
    {
      id: 1,
      name: "Cà phê đen",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppings: "Thạch dừa",
      size: "Lớn",
    },
    {
      id: 2,
      name: "Cà phê sữa",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppings: "Thạch dừa",
      size: "Lớn",
    },
    {
      id: 3,
      name: "Cà phê đen",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppings: "Thạch dừa",
      size: "Lớn",
    },
    {
      id: 4,
      name: "Cà phê đen",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppings: "Thạch dừa",
      size: "Lớn",
    },
    {
      id: 5,
      name: "Cà phê đen",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppinngs: "Thạch dừa",
      size: "Lớn",
    },
    {
      id: 6,
      name: "Cà phê đen",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppings: "Thạch dừa",
      size: "Lớn",
    },
    {
      id: 7,
      name: "Cà phê đen",
      image: "https://picsum.photos/200",
      price: 25000,
      quantity: 1,
      toppings: "Thạch dừa",
      size: "Lớn",
    },
  ];

  return (
    <DashboardLayout>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Chi tiết đơn hàng {id}</Typography>
        {formatStatus(status)}
      </Row>

      <Row>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontSize: 20 }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{
                              fontSize: 16,
                            }}
                          >
                            {column.format && column.id !== "description"
                              ? column.format(value)
                              : value}
                            {column.id === "description" &&
                              column.format(row.toppings, row.size)}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Row>
    </DashboardLayout>
  );
}

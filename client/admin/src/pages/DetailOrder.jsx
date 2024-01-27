import {
  Button,
  CircularProgress,
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
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
import Image from "../ui/Image";

import { Paid, Unpaid, Canceled } from "../features/dashboard/order/Paid";
import { getOrderById } from "../services/apiOrder";
import { useQuery } from "@tanstack/react-query";

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
    minWidth: 130,
    align: "center",
  },
  {
    id: "price",
    label: "Giá",
    minWidth: 120,
    align: "right",
    format: (value) => formatCurrency(value),
  },
  {
    id: "description",
    label: "Mô tả",
    minWidth: 300,
    align: "right",
    format: (toppings, size) => [toppings, ` Size ${size}`].join(" "),
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
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const order = data.order.order;
  const products = order.orderItems.map((item) => ({
    price: item.price,
    size: item.size,
    toppings: item.toppings,
    quantity: item.quantity,
    ...item.product,
  }));

  return (
    order && (
      <DashboardLayout>
        <Row
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Chi tiết đơn hàng {id}</Typography>
          {formatStatus(order.status)}
        </Row>

        <Row>
          <Typography variant="h6">
            <Button onClick={() => navigate(-1)}>Trở về</Button>
          </Typography>
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

        <Row
          sx={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              fontWeight: "bold",
            }}
          >
            Tổng tiền: {formatCurrency(order.totalMoney)}
          </Typography>
        </Row>
      </DashboardLayout>
    )
  );
}

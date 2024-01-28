import {
  Box,
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
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMutation, useQuery } from "@tanstack/react-query";

import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import { formatCurrency } from "../utils/helpers";
import Image from "../ui/Image";

import { Paid, Unpaid, Canceled } from "../features/dashboard/order/Paid";
import { getOrderById, updateOrder } from "../services/apiOrder";
import ConfirmationDialog from "../ui/ConfirmationDialog";

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
    case "Rejected":
      return <Canceled>{status}</Canceled>;
    default:
      return status;
  }
};

export default function DetailOrder() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [action, setAction] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id),
  });

  const { mutate } = useMutation({
    mutationFn: (data) => {
      updateOrder(data);
    },
    onSuccess: () => {
      toast.success("Thao tác thành công");
    },
    onError: () => {
      toast.error("Thao tác thất bại");
    },
  });

  const handleAbort = (event) => {
    event.preventDefault();
    setOpenConfirm(true);
    setAction("Rejected");
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setOpenConfirm(true);
    setAction("Completed");
  };

  const handleConfirmDialog = (event, id) => {
    event.preventDefault();
    setOpenConfirm(false);
    mutate({ id, action });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const order = data.order.order;

  const products = order?.orderItems.map((item) => ({
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
          <Typography component={"div"} variant="h5">
            Chi tiết đơn hàng {id}
          </Typography>
          <Typography component={"div"}>
            {formatStatus(order.status)}
          </Typography>
        </Row>

        <Row>
          <Button onClick={() => navigate(-1)}>
            <ArrowBackIcon color="primary" />
            <Typography component={"div"}>Trở về</Typography>
          </Button>

          {order.status === "Pending" && (
            <Box>
              <Button onClick={handleAbort}>
                <Typography component={"div"} color="red">
                  Hủy đơn hàng
                </Typography>
              </Button>
              <Button onClick={handleConfirm}>
                <Typography component={"div"} color="green">
                  Xác nhận đơn hàng
                </Typography>
              </Button>
              <ConfirmationDialog
                open={openConfirm}
                title="Xác nhận thao tác"
                handleClose={() => setOpenConfirm(false)}
                onSubmit={(event) => handleConfirmDialog(event, order._id)}
              ></ConfirmationDialog>
            </Box>
          )}

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
                  {products.map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component={"div"}
            sx={{
              marginTop: 1,
              fontWeight: "bold",
            }}
          >
            Coupon đã dùng: {order.couponUsed ? order.couponUsed : "Không"}
          </Typography>

          <Typography
            component={"div"}
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

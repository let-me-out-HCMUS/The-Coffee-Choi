import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { useEffect, useState } from "react";

import { getOrders } from "../services/orders";
import convertToVND from "../utils/convertToVND";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(props.initialOpen || false);

  return (
    <React.Fragment>
      <tr>
        <td>
          <IconButton
            aria-label="expand row"
            variant="plain"
            color="neutral"
            size="sm"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>
        <th scope="row">{new Date(row.createdTime).toLocaleString("vi-VN")}</th>
        <td>
          {row?.status === "Completed" ? (
            <p className=" text-green-500 font-bold">Hoàn tất</p>
          ) : row?.status === "Pending" ? (
            <p className=" text-yellow-500 font-bold">Đang chờ</p>
          ) : (
            <p className=" text-red-500 font-bold">Đơn hàng bị huỷ</p>
          )}
        </td>
        <td>{row?.orderItems.length}</td>
        <td>{row?.couponUsed ? row?.couponUsed.code : "Không có"}</td>
        <td className=" font-bold">
          {row?.totalMoney && convertToVND(row.totalMoney)}
        </td>
      </tr>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          {open && (
            <Sheet
              variant="soft"
              sx={{
                p: 1,
                pl: 6,
                boxShadow: "inset 0 3px 6px 0 rgba(0 0 0 / 0.08)",
                width: "100%",
              }}
            >
              <Typography level="body-lg" component="div">
                Chi tiết đơn hàng
              </Typography>
              <Table
                borderAxis="bothBetween"
                size="sm"
                aria-label="purchases"
                sx={{
                  "& > thead > tr > th:nth-child(n + 4), & > tbody > tr > td:nth-child(n + 4)":
                    { textAlign: "right" },
                  "--TableCell-paddingX": "0.5rem",
                }}
              >
                <thead>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Topping</th>
                    <th>Size</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {row.orderItems?.map((order, index) => (
                    <tr key={index}>
                      <th scope="row">{order.product.name}</th>
                      <td>{order.quantity}</td>
                      <td>{order.toppings}</td>
                      <td>{order.size}</td>
                      <td>{order?.price && convertToVND(order?.price)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <p className="">Phí vận chuyển: {convertToVND(30000)}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}

Row.propTypes = {
  initialOpen: PropTypes.bool,
  row: PropTypes.shape({
    calories: PropTypes.number,
    carbs: PropTypes.number,
    fat: PropTypes.number,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number,
        customerId: PropTypes.string,
        date: PropTypes.string,
      })
    ),
    name: PropTypes.string,
    price: PropTypes.number,
    protein: PropTypes.number,
  }),
};

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

export default function Purchase() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await getOrders();

      if (res.status === "fail") {
        return window.location.replace("/404");
      }

      setOrders(res.data.orders);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-4 bg-orange-100">
      <div className=" mb-4">
        <span className=" font-bold text-2xl text-orange-800 md:text-3xl">
          Lịch sử mua hàng
        </span>
      </div>
      <Sheet>
        <Table
          aria-label="collapsible table"
          sx={{
            "& > thead > tr > th:nth-child(n + 3), & > tbody > tr > td:nth-child(n + 3)":
              { textAlign: "right" },
            '& > tbody > tr:nth-child(odd) > td, & > tbody > tr:nth-child(odd) > th[scope="row"]':
              {
                borderBottom: 0,
              },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 40 }} aria-label="empty" />
              <th style={{ width: "20%" }}>Ngày</th>
              <th>Trạng thái</th>
              <th>Số sản phẩm</th>
              <th>Mã giảm giá</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((row, index) => (
              <Row key={index} row={row} initialOpen={index === 0} />
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}

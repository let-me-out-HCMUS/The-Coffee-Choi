import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { formatCurrency } from "../../../utils/helpers";
import { useState } from "react";
import ControlOrder from "./ControlOrder";
import { Paid, Unpaid, Canceled } from "./Paid";

const sortFunction = (a, b, sort) => {
  switch (sort) {
    case "totalMoneyUp":
      return a.totalMoney - b.totalMoney;
    case "totalMoneyDown":
      return b.totalMoney - a.totalMoney;
    case "createdTime":
      return a.createdTime.localeCompare(b.createdTime);
  }
};

const filterFunction = (row, filter) => {
  switch (filter) {
    case "paid":
      return row.status === "Completed";
    case "unpaid":
      return row.status === "Pending";
    case "canceled":
      return row.status === "Canceled";
    default:
      return true;
  }
};

const columns = [
  {
    id: "createdTime",
    label: "Ngày đặt",
    align: "center",
    minWidth: 100,
    format: (date) => new Date(date).toLocaleString("vi-VN"),
  },
  { id: "_id", label: "Mã đơn hàng", align: "center", minWidth: 250 },
  {
    id: "status",
    label: "Trạng thái",
    align: "center",
    minWidth: 150,
    format: (value) =>
      value === "Completed" ? (
        <Paid>{value}</Paid>
      ) : value === "Pending" ? (
        <Unpaid>{value}</Unpaid>
      ) : (
        <Canceled>{value}</Canceled>
      ),
  },
  {
    id: "totalMoney",
    label: "Tổng tiền",
    minWidth: 170,
    align: "right",
    format: (value) => formatCurrency(value),
  },
  {
    id: "navigation",
    label: "",
    minWidth: 50,
    align: "center",
  },
];

export default function TableOrder({ orders, sort, filter }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
            {orders &&
              orders
                .filter((row) => filterFunction(row, filter))
                .sort((a, b) => sortFunction(a, b, sort))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
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
                            {column.id === "navigation" && (
                              <ControlOrder orderId={row._id} />
                            )}
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={orders ? orders.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

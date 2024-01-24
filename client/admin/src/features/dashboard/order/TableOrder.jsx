import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { formatCurrency } from "../../../utils/helpers";
import styled from "@emotion/styled";
import { useState } from "react";
import ControlOrder from "./ControlOrder";

function createData(date, guestName, status, total) {
  return { date, guestName, status, total };
}

const rows = [
  createData("13/12/2003", "Nguyễn Văn A", "Đã thanh toán", 100000000),
  createData("13/12/2003", "Nguyễn Văn A", "Đã thanh toán", 123124152),
  createData("13/12/2003", "Nguyễn Văn A", "Đã thanh toán", 123),
  createData("13/12/2003", "Nguyễn Văn A", "Chưa thanh toán", 2352344),
  createData("13/12/2003", "Nguyễn Văn A", "Chưa thanh toán", 124124125),
  createData("13/12/2003", "Nguyễn Văn A", "Chưa thanh toán", 124124125),
  createData("13/12/2003", "Trần A", "Đã hủy", 124121346),
  createData("13/12/2003", "Nguyễn Văn A", "Chưa thanh toán", 100000000),
];

const sortFunction = (a, b, sort) => {
  switch (sort) {
    case "guestName":
      return a.guestName.localeCompare(b.guestName);
    case "status":
      return a.status.localeCompare(b.status);
    case "total":
      return a.total - b.total;
    case "date":
      return a.date.localeCompare(b.date);
  }
};

const filterFunction = (row, filter) => {
  switch (filter) {
    case "paid":
      return row.status === "Đã thanh toán";
    case "unpaid":
      return row.status === "Chưa thanh toán";
    case "canceled":
      return row.status === "Đã hủy";
    default:
      return true;
  }
};

const columns = [
  {
    id: "date",
    label: "Ngày đặt",
    align: "center",
    minWidth: 100,
    // format: (date) => new Date(date).toLocaleString("vi-VN"),
  },
  { id: "guestName", label: "Tên người dùng", align: "center", minWidth: 250 },
  {
    id: "status",
    label: "Trạng thái",
    align: "center",
    minWidth: 150,
    format: (value) =>
      value === "Đã thanh toán" ? (
        <Paid>{value}</Paid>
      ) : value === "Chưa thanh toán" ? (
        <Unpaid>{value}</Unpaid>
      ) : (
        <Canceled>{value}</Canceled>
      ),
  },
  {
    id: "total",
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

const Paid = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderRadius: 50,
  padding: 1,
}));

const Unpaid = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.error.dark,
  borderRadius: 50,
  padding: 1,
}));

const Canceled = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 50,
  padding: 1,
}));

export default function TableOrder({ sort, filter }) {
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
            {rows
              .filter((row) => filterFunction(row, filter))
              .sort((a, b) => sortFunction(a, b, sort))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                          {column.id === "navigation" && <ControlOrder />}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

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
import React from "react";
import { formatCurrency } from "../../../utils/helpers";

const columns = [
  { id: "name", label: "Tên", minWidth: 250 },
  { id: "category", label: "Danh mục", minWidth: 250 },
  {
    id: "quantity",
    label: "Số lượng đã bán",
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
];

function createData(name, category, quantity, price) {
  return { name, category, quantity, price };
}

const rows = [
  createData("Cà phê đèn mờ", "Cà phê", 322, 180000),
  createData("Cà phê 18", "Cà phê", 5421, 600000),
  createData("Cà phê trung niên", "Cà phê", 421, 120000),
  createData("Cà phê trẻ em", "Cà phê", 312, 900000),
  createData("Cà phê thú vật", "Cà phê", 241, 120000),
  createData("Cà phê creampie", "Cà phê", 121, 1500000),
  createData("Cà phê hoa hậu", "Cà phê", 213, 9000000),
  createData("Trà sữa mẹ", "Trà", 321, 2000000),
  createData("Trà sữa thiếu niên", "Trà", 123, 210000),
  createData("Trà sữa trân châu đường đen", "Trà", 321, 15000),
  createData("Trà đặc cầu", "Trà", 234, 500000),
  createData("Bánh creampie", "Bánh", 234, 1200000),
  createData("Bánh lỗ", "Bánh", 432, 210000),
  createData("Bánh tây", "Bánh", 23, 400000),
  createData("Bánh da đen", "Bánh", 234, 12),
];

export default function TableCategory() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => a.price < b.price)
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
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
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

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
import Image from "../../../ui/Image";

const columns = [
  {
    id: "image",
    label: "Sản phẩm",
    align: "center",
    minWidth: 250,
    format: (value) => (
      <Image src={value} width={75} height={75} alt="Sản phẩm" />
    ),
  },
  { id: "name", label: "Tên", minWidth: 300 },
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

function createData(name, image, quantity, price) {
  return { name, image, quantity, price };
}

const imageLink =
  "https://product.hstatic.net/1000075078/product/1697442235_cloudfee-hanh-nhan-nuong_30e91f633a784000b4233d65081b7410.jpg";

const rows = [
  createData("Cà phê đèn mờ", imageLink, 322, 180000),
  createData("Cà phê 18", imageLink, 5421, 600000),
  createData("Cà phê trung niên", imageLink, 421, 120000),
  createData("Cà phê trẻ em", imageLink, 312, 900000),
  createData("Cà phê thú vật", imageLink, 241, 120000),
  createData("Cà phê creampie", imageLink, 121, 1500000),
  createData("Cà phê hoa hậu", imageLink, 213, 9000000),
  createData("Trà sữa mẹ", imageLink, 321, 2000000),
  createData("Trà sữa thiếu niên", imageLink, 123, 210000),
  createData("Trà sữa trân châu đường đen", imageLink, 321, 15000),
  createData("Trà đặc cầu", imageLink, 234, 500000),
  createData("Bánh creampie", imageLink, 234, 1200000),
  createData("Bánh lỗ", imageLink, 432, 210000),
  createData("Bánh tây", imageLink, 23, 400000),
  createData("Bánh da đen", imageLink, 234, 12),
];

const sortFunction = (a, b, sort) => {
  switch (sort) {
    case "name":
      return a.name.localeCompare(b.name);
    case "priceDown":
      return b.price - a.price;
    case "priceUp":
      return a.price - b.price;
    case "quantity":
      return b.quantity - a.quantity;
  }
};

export default function TableCategory({ sort }) {
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
        rowsPerPageOptions={[3, 5, 10]}
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

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
    id: "sold",
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

const sortFunction = (a, b, sort) => {
  switch (sort) {
    case "name":
      return a.name.localeCompare(b.name);
    case "priceDown":
      return b.price - a.price;
    case "priceUp":
      return a.price - b.price;
    case "sold":
      return b.sold - a.sold;
  }
};

export default function TableCategory({ products, sort }) {
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
    products && (
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
              {products
                .sort((a, b) => sortFunction(a, b, sort))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
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
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    )
  );
}

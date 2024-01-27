import {
  Button,
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
import styled from "@emotion/styled";
import { useState } from "react";
import Row from "../Row";

import AddUserDialog from "./AddUserDialog";

const sortFunction = (a, b, sort) => {
  switch (sort) {
    case "name":
      return a.name.localeCompare(b.name);
    case "email":
      return a.email.localeCompare(b.email);
  }
};

const filterFunction = (row, filter) => {
  switch (filter) {
    case "user":
      return row.role === "user";
    case "admin":
      return row.role === "admin";

    default:
      return true;
  }
};

const columns = [
  {
    id: "name",
    label: "Tên người dùng",
    align: "center",
    minWidth: 100,
  },
  { id: "email", label: "Tài khoản", align: "center", minWidth: 250 },
  {
    id: "role",
    label: "Vai trò",
    align: "center",
    minWidth: 150,
    format: (value) =>
      value === "user" ? <User>{value}</User> : <Admin>{value}</Admin>,
  },
  {
    id: "address",
    label: "Địa chỉ",
    minWidth: 170,
    align: "right",
  },
];

const User = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderRadius: 50,
  padding: 1,
}));

const Admin = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: 50,
  padding: 1,
}));

export default function TableUser({ users, sort, filter }) {
  const [openAddAdmin, setOpenAddAdmin] = useState(false);

  //   Pagination
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
    users && (
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
                {users
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
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Button
          variant="contained"
          onClick={() => setOpenAddAdmin(true)}
          sx={{
            marginTop: 2,
            fontSize: 16,
          }}
        >
          Thêm người dùng
        </Button>

        <AddUserDialog
          open={openAddAdmin}
          handleClose={() => setOpenAddAdmin(false)}
        />
      </Row>
    )
  );
}

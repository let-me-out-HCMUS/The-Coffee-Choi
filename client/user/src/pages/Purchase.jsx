import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/joy/IconButton";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

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
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>
        <th scope="row">{row.name}</th>
        <td>{row.calories}</td>
        <td>{row.fat}</td>
        <td>{row.carbs}</td>
        <td>{row.protein}</td>
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
              }}>
              <Typography level="body-lg" component="div">
                History
              </Typography>
              <Table
                borderAxis="bothBetween"
                size="sm"
                aria-label="purchases"
                sx={{
                  "& > thead > tr > th:nth-child(n + 3), & > tbody > tr > td:nth-child(n + 3)":
                    { textAlign: "right" },
                  "--TableCell-paddingX": "0.5rem",
                }}>
                <thead>
                  <tr>
                    <th>Ngày</th>
                    <th>Số lượng </th>
                    <th>Amount</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {row.history.map((historyRow) => (
                    <tr key={historyRow.date}>
                      <th scope="row">{historyRow.date}</th>
                      <td>{historyRow.customerId}</td>
                      <td>{historyRow.amount}</td>
                      <td>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </td>
                    </tr>
                  ))}
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
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function Purchase() {
  return (
    <div className="p-4 bg-orange-100">
      <div>
        <span className="font-bold text-2xl text-orange-800 md:text-3xl">
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
          }}>
          <thead>
            <tr>
              <th style={{ width: 40 }} aria-label="empty" />
              <th style={{ width: "40%" }}>Ngày</th>
              <th>Số sản phẩm</th>
              <th>Topping</th>
              <th>Mã giảm giá</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <Row key={row.name} row={row} initialOpen={index === 0} />
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
}

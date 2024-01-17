import Stat from "./Stat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FunctionsIcon from "@mui/icons-material/Functions";
import { Grid } from "@mui/material";
import { lightBlue, orange } from "@mui/material/colors";

function Stats({ orders, customers, sales, AvgOrderSales }) {
  console.log(orders, customers, sales, AvgOrderSales);
  // 1.
  const numOrders = orders.length;

  // 2.
  const numCustomers = customers.length;

  // 3.
  // const checkins = confirmedStays.length;

  // 4.
  // const occupation =
  //   confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
  // (numDays * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <Stat
        title="Orders"
        color={lightBlue[900]}
        icon={<ShoppingCartIcon />}
        value={numOrders}
      />

      <Stat title="Sales" color="green" icon={<PaidIcon />} value={sales} />

      <Stat
        title="Customers"
        color="indigo"
        icon={<PersonAddIcon />}
        value={numCustomers}
      />
      <Stat
        title="Avg Sales"
        color={orange[900]}
        icon={<FunctionsIcon />}
        value={AvgOrderSales}
      />
    </Grid>
  );
}

export default Stats;

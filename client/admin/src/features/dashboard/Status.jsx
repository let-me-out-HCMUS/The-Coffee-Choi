import Stat from "./Stat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FunctionsIcon from "@mui/icons-material/Functions";
import { Grid } from "@mui/material";
import { lightBlue, orange } from "@mui/material/colors";
import useMediaSize from "../../hooks/useMediaSize";

function Stats({ orders, customers, sales, AvgOrderSales }) {
  // 1.
  const numOrders = orders.length;

  // 2.
  const numCustomers = customers.length;

  // Responsive option
  const currentMedia = useMediaSize();
  const iconSize = currentMedia.md ? "large" : currentMedia.sm ? "" : "40px";
  const spacing = currentMedia.md ? 2 : currentMedia.sm ? 1 : 0;

  return (
    <Grid
      container
      spacing={spacing}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 1,
      }}
    >
      <Stat
        title="Orders"
        color={lightBlue[900]}
        icon={<ShoppingCartIcon fontSize={iconSize} />}
        value={numOrders}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<PaidIcon fontSize={iconSize} />}
        value={sales}
      />

      <Stat
        title="Customers"
        color="indigo"
        icon={<PersonAddIcon fontSize={iconSize} />}
        value={numCustomers}
      />
      <Stat
        title="Avg Sales"
        color={orange[900]}
        icon={<FunctionsIcon fontSize={iconSize} />}
        value={AvgOrderSales}
      />
    </Grid>
  );
}

export default Stats;

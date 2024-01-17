import Stat from "./Stat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FunctionsIcon from "@mui/icons-material/Functions";

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
    <>
      <Stat
        title="orders"
        color="blue"
        icon={<ShoppingCartIcon />}
        value={numOrders}
      />

      <Stat title="Sales" color="green" icon={<PaidIcon />} value={sales} />

      <Stat
        title="Check ins"
        color="indigo"
        icon={<PersonAddIcon />}
        value={numCustomers}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<FunctionsIcon />}
        value={AvgOrderSales}
      />
    </>
  );
}

export default Stats;

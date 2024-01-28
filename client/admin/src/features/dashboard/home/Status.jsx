import Stat from "./Stat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { lightBlue } from "@mui/material/colors";
import useMediaSize from "../../../hooks/useMediaSize";
import DashboardItem from "../DashboardItem";
import { formatCurrency } from "../../../utils/helpers";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../../../services/apiUser";
import { CircularProgress } from "@mui/material";

function Stats({ orders, sales }) {
  const currentMedia = useMediaSize();
  const iconSize = currentMedia.md ? "large" : currentMedia.sm ? "" : "40px";

  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });

  if (isLoading || !data) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const patron = data?.data?.users.filter(
    (user) => user.role === "user"
  ).length;

  return (
    data && (
      <>
        <DashboardItem sm={2.5}>
          <Stat
            title="Orders"
            color={lightBlue[900]}
            icon={<ShoppingCartIcon fontSize={iconSize} />}
            value={orders}
          />
        </DashboardItem>

        <DashboardItem sm={2.5}>
          <Stat
            title="Patron"
            color="indigo"
            icon={<PersonAddIcon fontSize={iconSize} />}
            value={patron}
          />
        </DashboardItem>

        <DashboardItem sm={6.5}>
          <Stat
            title="Sales"
            color="green"
            icon={<PaidIcon fontSize={iconSize} />}
            value={formatCurrency(sales)}
          />
        </DashboardItem>
      </>
    )
  );
}

export default Stats;

import { Typography } from "@mui/material";
import DashboardItem from "../DashboardItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemCategory({ category }) {
  return (
    <DashboardItem
      md={3}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "auto",
        gap: 1,
      }}
    >
      <FontAwesomeIcon icon={category.icon} />
      <Link to={category.slug}>
        <Typography variant="h6">{category.name}</Typography>
      </Link>
    </DashboardItem>
  );
}

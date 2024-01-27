import { Typography } from "@mui/material";
import DashboardItem from "../DashboardItem";
import { Link } from "react-router-dom";

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
      <Link to={category.slug}>
        <Typography variant="h6">{category.name}</Typography>
        {category.status === false && (
          <Typography variant="body2" color="red">
            Đang khóa
          </Typography>
        )}
      </Link>
    </DashboardItem>
  );
}

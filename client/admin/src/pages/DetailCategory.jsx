import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import DashboardItem from "../features/dashboard/DashboardItem";
import { Button, Typography } from "@mui/material";
import SortCategory from "../features/dashboard/category/SortCategory";
import TableCategory from "../features/dashboard/category/TableCategory";
import { useState } from "react";
import AddProductDialog from "../features/dashboard/category/AddProductDialog";

export default function DetailCategory() {
  const [sort, setSort] = useState("name");
  const [open, setOpen] = useState(false);

  return (
    <DashboardLayout>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DashboardItem
          md={12}
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Danh sách danh mục</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Thêm sản phẩm
          </Button>
          <AddProductDialog open={open} handleClose={() => setOpen(false)} />
          <SortCategory sort={sort} setSort={setSort} />
        </DashboardItem>
      </Row>

      <Row>
        <DashboardItem md={12} sm={12}>
          <TableCategory sort={sort} />
        </DashboardItem>
      </Row>
    </DashboardLayout>
  );
}

import { Button, ButtonGroup, Typography } from "@mui/material";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import ItemCategory from "../features/dashboard/category/ItemCategory";
import AddCategoryDialog from "../features/dashboard/category/AddCategoryDialog";

import {
  faCookieBite,
  faCookie,
  faMugHot,
  faMugSaucer,
  faSeedling,
  faCannabis,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DeleteCategoryDialog from "../features/dashboard/category/DeleteCategoryDialog";

const categories = [
  {
    name: "Cà phê",
    slug: "ca-phe",
    icon: faMugHot,
  },

  {
    name: "Trà",
    slug: "tra",
    icon: faSeedling,
  },
  {
    name: "Cloud",
    slug: "cloud",
    icon: faMugHot,
  },
  {
    name: "Hi-Tea Healthy",
    slug: "hi-tea-healthy",
    icon: faCannabis,
  },
  {
    name: "Trà - Chocolate",
    slug: "tra-xanh-chocolate",
    icon: faCookie,
  },
  {
    name: "Thức uống đá xay",
    slug: "thuc-uong-da-xay",
    icon: faMugSaucer,
  },
  {
    name: "Bánh & Snack",
    slug: "banh-snack",
    icon: faCookieBite,
  },
];

export default function Category() {
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  return (
    <DashboardLayout>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 1,
          margin: 2,
        }}
      >
        <Typography variant="h4">Danh mục sản phẩm</Typography>
        <ButtonGroup>
          <Button variant="contained" onClick={() => setIsOpenAddDialog(true)}>
            Thêm danh mục
          </Button>
          <AddCategoryDialog
            open={isOpenAddDialog}
            setOpen={() => setIsOpenAddDialog(true)}
            handleClose={() => setIsOpenAddDialog(false)}
          />

          <Button
            variant="contained"
            onClick={() => setIsOpenDeleteDialog(true)}
          >
            Xóa danh mục
          </Button>
          <DeleteCategoryDialog
            open={isOpenDeleteDialog}
            setOpen={() => setIsOpenDeleteDialog(true)}
            handleClose={() => setIsOpenDeleteDialog(false)}
            categories={categories}
          />
        </ButtonGroup>
      </Row>
      <Row
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 1,
        }}
      >
        {categories.map((category) => (
          <ItemCategory key={category.slug} category={category} />
        ))}
      </Row>
    </DashboardLayout>
  );
}

import { useState } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";

import ItemCategory from "../features/dashboard/category/ItemCategory";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Row from "../features/dashboard/Row";
import AddCategoryDialog from "../features/dashboard/category/AddCategoryDialog";
import DeleteCategoryDialog from "../features/dashboard/category/DeleteCategoryDialog";
import { getAll as getCategories } from "../services/apiCategory";

export default function Category() {
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const categories = data.categories;

  return (
    categories && (
      <DashboardLayout>
        <Row
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 1,
            marginX: 1,
          }}
        >
          <Typography variant="h4">Danh mục sản phẩm</Typography>
          <ButtonGroup>
            <Button
              variant="contained"
              onClick={() => setIsOpenAddDialog(true)}
            >
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
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          {categories.map((category) => (
            <ItemCategory key={category.slug} category={category} />
          ))}
        </Row>
        <Row></Row>
      </DashboardLayout>
    )
  );
}

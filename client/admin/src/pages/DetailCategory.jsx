import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, CircularProgress, Typography } from "@mui/material";

import Row from "../features/dashboard/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardItem from "../features/dashboard/DashboardItem";
import SortCategory from "../features/dashboard/category/SortCategory";
import TableCategory from "../features/dashboard/category/TableCategory";
import AddProductDialog from "../features/dashboard/category/AddProductDialog";

import { getProductsFromSlug, updateCategory } from "../services/apiCategory";
import toast from "react-hot-toast";

export default function DetailCategory() {
  const [sort, setSort] = useState("name");
  const [open, setOpen] = useState(false);

  const { slug } = useParams();

  const { mutate } = useMutation({
    mutationFn: (data) => {
      updateCategory({ data });
    },
    onSuccess: () => {
      toast.success("Đã mở khóa thành công, vui lòng tải lại trang");
    },
    onError: () => {
      toast.error("Mở khóa thất bại");
    },
  });

  const { isLoading, error, data } = useQuery({
    queryKey: ["productsOfCategory", slug],
    queryFn: () => getProductsFromSlug(slug),
  });

  if (isLoading) {
    return (
      <DashboardLayout>
        <CircularProgress />;
      </DashboardLayout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const products = data?.products;
  const category = data?.category;

  const handleUnlockCategory = () => {
    mutate({ ...category, status: true });
  };

  return (
    products && (
      <DashboardLayout>
        {category.status ? (
          <Row>
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
                <AddProductDialog
                  open={open}
                  handleClose={() => setOpen(false)}
                />
                <SortCategory sort={sort} setSort={setSort} />
              </DashboardItem>
            </Row>

            <Row>
              <DashboardItem md={12} sm={12}>
                <TableCategory products={products} sort={sort} />
              </DashboardItem>
            </Row>
          </Row>
        ) : (
          <Row
            sx={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" color="red">
              Danh mục này đã bị khóa
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={handleUnlockCategory}
            >
              Mở khóa
            </Button>
          </Row>
        )}
      </DashboardLayout>
    )
  );
}

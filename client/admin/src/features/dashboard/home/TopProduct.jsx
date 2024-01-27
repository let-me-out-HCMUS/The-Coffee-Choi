import styled from "@emotion/styled";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import useMediaSize from "../../../hooks/useMediaSize";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/apiProduct";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "none" : "",
  padding: theme.spacing(1),
  background: "none",
  boxShadow: "none",
}));

export default function TopProduct() {
  const currentMedia = useMediaSize();

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const products = data.products;

  return (
    products && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          paddingY: 1,
        }}
      >
        <Typography
          sx={{
            paddingX: 1,
            marginBottom: 2,
            fontSize: currentMedia.md ? 22 : 8,
          }}
          fontWeight={550}
        >
          Top sản phẩm bán chạy nhất
        </Typography>

        <Stack
          spacing={0.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          {products
            .sort((a, b) => b.sold - a.sold)
            .slice(0, 8)
            .map((product, index) => (
              <Item
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2rem auto 2rem",
                  alignItems: "center",
                  width: "100%",
                  gap: "1rem",
                }}
              >
                <ProductItem product={product} top={index + 1} />
              </Item>
            ))}
        </Stack>
      </Box>
    )
  );
}

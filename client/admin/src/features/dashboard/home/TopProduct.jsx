import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import useMediaSize from "../../../hooks/useMediaSize";

const mockProduct = [
  {
    id: 1,
    name: "Cà phê sữa đá",
    quantity: 100,
  },
  {
    id: 2,
    name: "Cà phê đen đá",
    quantity: 90,
  },
  {
    id: 3,
    name: "Cà phê gội đầu",
    quantity: 80,
  },
  {
    id: 4,
    name: "Cà phê rau xanh",
    quantity: 70,
  },
  {
    id: 5,
    name: "Cà pheeeeeeee",
    quantity: 60,
  },
  {
    id: 6,
    name: "Cà pheeeeeeee",
    quantity: 50,
  },
  {
    id: 7,
    name: "Trà sữa trân châu",
    quantity: 30,
  },
  {
    id: 8,
    name: "Hồng trà ",
    quantity: 2,
  },
];

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "none" : "",
  padding: theme.spacing(1),
  background: "none",
  boxShadow: "none",
}));

export default function TopProduct() {
  const currentMedia = useMediaSize();

  return (
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
        {mockProduct.map((product, index) => (
          <Item
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "2rem auto 2rem",
              width: "100%",
              gap: "1rem",
            }}
          >
            <ProductItem product={product} top={index + 1} />
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

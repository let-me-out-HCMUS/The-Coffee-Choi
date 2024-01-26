import { useMemo, useState, useEffect, useLayoutEffect } from "react";
import { Pagination } from "@mui/material";

// import { Pagination } from "../common/Pagination";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsPagination({
  products,
  category,
  searchValue,
  isFilter,
  handleFilter,
}) {
  const [productValue, setProductValue] = useState([]);
  const [PRODUCTS_PER_PAGE, setProductsPerPage] = useState(
    window.innerWidth <= 768 ? 4 : 8
  );

  //call api
  useEffect(() => {
    setProductValue(
      products.filter((product) => product.category === category)
    );

    if (isFilter) {
      // console.log("filter");
      setProductValue((pre) => pre.filter(handleFilter));
      setCurrentPage(1);
    }

    if (searchValue) {
      // console.log("search", searchValue);
      setProductValue((pre) =>
        pre.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setCurrentPage(1);
    }
  }, [searchValue, isFilter, products, handleFilter, category]);

  // set number of products per page
  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(window.innerWidth <= 768 ? 4 : 8);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const lastPageIndex = firstPageIndex + PRODUCTS_PER_PAGE;
    return productValue.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productValue]);

  return (
    <div className="mb-12">
      {productValue.length === 0 && (
        <div className=" text-center text-xl font-semibold">
          Không có sản phẩm nào
        </div>
      )}
      <div className=" grid grid-cols-2 gap-y-4 gap-x-8 md:grid-cols-4 md:gap-x-4">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {productValue.length !== 0 && (
        <div className=" mt-8 flex justify-center max-w-full">
          {/* <Pagination
            totalItems={productValue.length}
            itemsPerPage={PRODUCTS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          /> */}

          <Pagination
            count={Math.ceil(productValue.length / PRODUCTS_PER_PAGE)}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            perPage={PRODUCTS_PER_PAGE}
          />
        </div>
      )}
    </div>
  );
}

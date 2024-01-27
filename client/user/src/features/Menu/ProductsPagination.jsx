import { useMemo, useState, useEffect } from "react";
import { Pagination } from "@mui/material";

// import { Pagination } from "../common/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import { getProductsCustom } from "../../services/categories";

export default function ProductsPagination({
  // products,
  category,
  isSearch,
  searchValue,
  filterValue,
  // handleFilter,
  sortValue,
}) {
  const [products, setProducts] = useState([]);
  const [PRODUCTS_PER_PAGE, setProductsPerPage] = useState(
    window.innerWidth <= 768 ? 4 : 8
  );
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //call api
  useEffect(() => {
    const getData = async () => {
      const res = await getProductsCustom(
        category,
        currentPage,
        PRODUCTS_PER_PAGE,
        sortValue,
        filterValue.price.from,
        filterValue.price.to,
        filterValue.isDiscount ? 1 : 0,
      );

      if (res.status === "fail") {
        return window.location.replace("/404");
      }

      setProducts(res.data.products);
      setTotalPage(res.data.totalPage);
    };

    getData();
  }, [sortValue, filterValue, category, currentPage]);

  // set number of products per page
  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(window.innerWidth <= 768 ? 4 : 8);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-12">
      {products?.length === 0 && (
        <div className=" text-center text-xl font-semibold">
          Không có sản phẩm nào
        </div>
      )}
      <div className=" grid grid-cols-2 gap-y-4 gap-x-8 md:grid-cols-4 md:gap-x-4">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {products?.length !== 0 && (
        <div className=" mt-8 flex justify-center max-w-full">
          {/* <Pagination
            totalItems={products.length}
            itemsPerPage={PRODUCTS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          /> */}

          <Pagination
            count={totalPage}
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

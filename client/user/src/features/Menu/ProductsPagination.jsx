import { useMemo, useState, useEffect } from "react";

import { Pagination } from "../common/Pagination";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsPagination({ products }) {
  // only nums % 6 =0 work well
  //todo: set products per page 6-12 by min width
  const PRODUCTS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const lastPageIndex = firstPageIndex + PRODUCTS_PER_PAGE;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, products]);

  return (
    <div className="mb-12">
      <div className=" grid grid-cols-2 gap-x-8 md:grid-cols-4 md:gap-x-4 lg:grid-cols-4 lg:gap-x-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className=" mt-8 flex justify-center max-w-full">
        <Pagination
          totalItems={products.length}
          itemsPerPage={PRODUCTS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

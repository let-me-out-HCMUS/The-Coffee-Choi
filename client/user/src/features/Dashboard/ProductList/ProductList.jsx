import React from "react";
import productListHome from "../../../mocks/ProductListHome/data";
import CoupleProducts from "./CoupleProducts";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-6 p-5 px-10">
      <div>
        <img
          className="rounded-xl"
          src="https://file.hstatic.net/1000075078/file/noti_c106792cdcb744158f1b3e0c179cf6c4.jpg"
          alt=""
        />
      </div>
      <CoupleProducts products={productListHome.slice(0, 2)} />
      <CoupleProducts products={productListHome.slice(2, 4)} />
      <CoupleProducts products={productListHome.slice(4, 6)} />
    </div>
  );
};

export default ProductList;

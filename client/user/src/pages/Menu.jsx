import MenuSide from "../features/Menu/MenuSide";
import MenuContent from "../features/Menu/MenuContent";

import productlist from '../mocks/ProductListHome/data';
import categorylist from '../mocks/Category/data';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Menu() {
  const {slug} = useParams();

  const [selectedCategory, setSelectedCategory] = useState(categorylist);

  useEffect(() => {
    if (slug) {
      if (slug === "all") {
        setSelectedCategory(categorylist);
        return;
      }
      setSelectedCategory(categorylist.filter((item) => item.slug === slug));
    }
  }, [slug]);

  return (
    <div className=" flex lg:my-28 lg:mx-16 ">
      <MenuSide category={categorylist} selectedCategory={selectedCategory} />
      <MenuContent products={productlist} categories={selectedCategory} />
    </div>
  );
}

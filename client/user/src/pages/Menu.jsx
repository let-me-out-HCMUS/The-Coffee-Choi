import MenuSide from "../features/Menu/MenuSide";
import MenuContent from "../features/Menu/MenuContent";

import productlist from "../mocks/ProductListHome/data";
// import categorylist from '../mocks/Category/data';

import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { getCategories } from "../services/categories";

export default function Menu() {
  const { slug } = useParams();

  const [categorylist, setCategorylist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categorylist);

  useEffect(() => {
    const getData = async () => {
      const res = await getCategories();

      if (res.status === "fail") {
        return window.location.replace("/404");
      }

      setCategorylist(res.data.categories);
      if (slug === "all") {
        setSelectedCategory(res.data.categories);
        return;
      }
      setSelectedCategory(
        res.data.categories.filter((item) => item.slug === slug)
      );
    };

    getData();
  }, []);

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

import MenuSide from "../features/Menu/MenuSide";
import MenuContent from "../features/Menu/MenuContent";

import productlist from '../mocks/ProductListHome/data';
import { useState } from "react";

export default function Menu() {
  const categorylist = [
    {
      id: 'Coffee',
      name: "Cà phê",
      description: "Coffee blabla",
    },
    {
      id: 'Tea',
      name: "Trà",
      description: "Tea blabla",
    },
    {
      id: 'Dessert',
      name: "Đá xây",
      description: "Smoothie blabla",
    },
    {
      id: 'Food',
      name: "Bánh",
      description: "Cookie blabla",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categorylist);
  
  const onClickCategory = (category) => {
    // console.log(category);
    if (category === "All") {
      setSelectedCategory(categorylist);
      return;
    }
    setSelectedCategory(categorylist.filter((item) => item.id === category));
  };

  return (
    <div className=" flex lg:my-28 lg:mx-16 ">
      <MenuSide category={categorylist} onClickCategory={onClickCategory} selectedCategory={selectedCategory} />
      <MenuContent products={productlist} categories={selectedCategory} />
    </div>
  );
}

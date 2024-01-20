import MenuSide from "../features/Menu/MenuSide";
import MenuContent from "../features/Menu/MenuContent";

import productlist from '../mocks/ProductListHome/data';

export default function Menu() {
  const category = [
    {
      name: "Cà phê",
      description: "Coffee blabla",
    },
    {
      name: "Trà",
      description: "Tea blabla",
    },
    {
      name: "Đá xây",
      description: "Smoothie blabla",
    },
    {
      name: "Bánh",
      description: "Cookie blabla",
    },
  ];

  return (
    <div className=" flex lg:my-28 lg:mx-16 ">
      <MenuSide category={category} />
      <MenuContent products={productlist} category={category} />
    </div>
  );
}

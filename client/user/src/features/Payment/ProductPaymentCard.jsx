import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import convertToVND from "../../utils/convertToVND";
import toast from "react-hot-toast";

const ProductPaymentCard = ({ product }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);
  const totalPrice =
    product.quantity *
    (product.price +
      product.size.price +
      product.toppings.reduce((acc, topping) => acc + topping.price, 0));

  const handleIncreaseQuantity = () => {
    updateQuantity(product, product.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      updateQuantity(product, product.quantity - 1);
    }
  };

  return (
    <div className=" mt-4 p-4 md:p-6 rounded-lg shadow-md bg-white relative">
      <div className="flex">
        <div className="mr-4 w-32 md:w-48 lg:w-32 flex-none">
          <img
            className="w-32 md:w-48 lg:w-32"
            src={product.image}
            alt=""
          />
        </div>
        <div className="grow">
          <span className="font-bold md:text-2xl lg:text-lg">
            {product.name}
          </span>
          <div className="text-xs md:text-base lg:text-sm mt-2">
            <p>
              <b>Kích cỡ: </b> {product.size.name}
            </p>
            <p>
              <b>Topping: </b>
              {product.toppings.length > 0 ? product.toppings.map((topping) => topping.name).join(", ") : "Không có"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex flex-row h-8 md:h-12 lg:h-8 w-20 md:w-32 lg:w-20 rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            onClick={handleDecreaseQuantity}
            className=" bg-orange-200 hover:bg-orange-400 h-full w-12 md:w-20 lg:w-12 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-xl font-thin">−</span>
          </button>
          <span className="outline-none leading-8 md:leading-[3rem] lg:leading-8 text-center w-full bg-orange-200 font-semibold">
            {product.quantity}
          </span>
          <button
            data-action="increment"
            onClick={handleIncreaseQuantity}
            className="bg-orange-200 hover:bg-orange-400 h-full w-12 md:w-20 lg:w-12 rounded-r cursor-pointer"
          >
            <span className="m-auto text-xl font-thin">+</span>
          </button>
        </div>
        <div className="py-2 px-5 md:px-10">
          <span className="text-orange-400 md:text-3xl lg:text-xl font-semibold">
            {convertToVND(totalPrice)}
          </span>
        </div>
      </div>
      <div className="absolute top-0 right-2 md:right-4 md:top-2 lg:top-1 lg:right-3">
        <button
          onClick={() => {
            removeFromCart(product)

            toast.success('Xóa sản phẩm khỏi giỏ hàng thành công')
          }}
          className="text-red-400  hover:text-red-600"
        >
          <i className="fas fa-times text-2xl md:text-3xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductPaymentCard;

import React from "react";
import ProductPaymentCard from "../features/Payment/ProductPaymentCard";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import convertToVND from "../utils/convertToVND";

const Payment = () => {
  const { getCart, getCartTotal } = useContext(CartContext);

  const cart = getCart();

  return (
    <div className="p-4 bg-orange-100">
      <div>
        <span className="font-bold text-2xl text-orange-800 md:text-3xl">
          Giỏ hàng của bạn
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4">
        <div>
          {cart.map((product) => (
            <ProductPaymentCard key={product._id} product={product} />
          ))}
        </div>
        <div className=" mt-4 p-4 rounded-lg shadow-md h-fit bg-white">
          <div className="mb-5">
            <span className="font-semibold text-xl md:text-2xl">
              Mã giảm giá
            </span>
            <div className="flex">
              <input
                type="text"
                className="w-full mr-5 border-2 border-gray-300 rounded-lg p-2 mt-2"
                placeholder="Nhập mã giảm giá"
              />
              <button className="w-32 bg-orange-500 text-white rounded-lg p-2 mt-2 hover:bg-orange-600 transition-all">
                Áp dụng
              </button>
            </div>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-xl md:text-2xl">
              Thanh toán đơn hàng của bạn
            </span>
          </div>
          <div className="grid grid-cols-2 p-2 border-t-2 border-b-2 md:text-lg md:p-4">
            <span>Tổng tiền hàng: </span>
            <span>+ {convertToVND(getCartTotal())}</span>
            <span>Phí vận chuyển: </span>
            <span>+ 30.000đ</span>
            <span>Mã giảm giá: </span>
            <span>- 30.000đ</span>
          </div>
          <div className="text-orange-400 text-2xl grid grid-cols-2 py-4 md:text-3xl md:px-5 md:pb-8">
            <span>Tổng: </span>
            <span>{convertToVND(getCartTotal())}</span>
          </div>
          <div className="flex justify-center">
            <button className="w-48 md:w-60 leading-[48px] rounded-full bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all text-xl">
              Thanh toán
            </button>
          </div>
          <div className="px-2 py-4">
            <p className="text-slate-400 md:text-lg">
              <b>Lưu ý: </b>
              <i>
                Bằng việc bấm vào thanh toán nghĩa là bạn đã đồng ý với chính
                sách thanh toán của chúng tôi.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

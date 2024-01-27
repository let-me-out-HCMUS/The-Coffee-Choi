import React from "react";
import ProductPaymentCard from "../features/Payment/ProductPaymentCard";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";
import convertToVND from "../utils/convertToVND";
import { useForm } from "react-hook-form";
import { getCoupon } from "../services/coupons";
import toast from "react-hot-toast";
import { createOrder } from "../services/orders";
import { useNavigate } from "react-router";
import Spinner from "../features/common/Spinner"

const Payment = () => {
  const navigate = useNavigate();
  const { getCart, getCartTotal, clearCart } = useContext(CartContext);
  const { currentUser, loadUser } = useContext(AuthContext);

  const cart = getCart();

  const [coupon, setCoupon] = useState(null);
  const [total, setTotal] = useState(getCartTotal());
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    if (coupon) {
      setTotal(
        getCartTotal() -
          (getCartTotal() * coupon.discountValue) / 100 +
          30000
      );
    } else {
      setTotal(getCartTotal() + 30000);
    }
  }, [coupon, getCartTotal]);


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await getCoupon(data.discountCode);
    
      if (res.data.coupon) {
        toast.success("Áp dụng mã giảm giá thành công");
        setCoupon(res.data.coupon);
      } else {
        toast.error("Mã giảm giá không tồn tại hoặc đã được sử dụng");
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }
  };

  const handleCreateOrder = async () => {
    setIsPaying(true);

    if (!currentUser) {
      toast.error("Vui lòng đăng nhập để thanh toán");
      setIsPaying(false);
      return;
    }

    if (cart.length === 0) {
      toast.error("Giỏ hàng của bạn đang trống");
      setIsPaying(false);
      return;
    }

    if (currentUser.balance < total) {
      toast.error("Số dư trong tài khoản không đủ để thực hiện thanh toán");
      setIsPaying(false);
      return;
    }

    const order = {
      products: cart.map((product) => ({
        id: product._id,
        quantity: product.quantity,
        size: product.size._id,
        toppings: product.toppings.map((topping) => topping._id),
      })),
      couponUsed: coupon ? coupon.code : null,
    };

    try {
      const res = await createOrder(order);

      if (res.status === "success") {
        toast.success("Đặt hàng thành công");
        clearCart();
        await loadUser();
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra, vui lòng thử lại");
    }

    setIsPaying(false);
  }

  if (isPaying)
    return <Spinner />

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

                {...register("discountCode", { required: true })}
              />
              <button onClick={handleSubmit(onSubmit)} className="w-32 bg-orange-500 text-white rounded-lg p-2 mt-2 hover:bg-orange-600 transition-all">
                Áp dụng
              </button>
            </div>
            {errors.discountCode && <span className="text-red-500">Vui lòng nhập mã giảm giá</span>}
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
            <span>+ {convertToVND(30000)}</span>
            <span>Mã giảm giá tiền hàng: </span>
            <span>- {coupon ? `${coupon.discountValue}%` : 0}</span>
          </div>
          <div className="text-orange-400 text-2xl grid grid-cols-2 py-4 md:text-3xl md:px-5 md:pb-8">
            <span>Tổng: </span>
            <span>{convertToVND(total)}</span>
          </div>
          <div className="flex justify-center">
            <button onClick={handleCreateOrder} className="w-48 md:w-60 leading-[48px] rounded-full bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 transition-all text-xl">
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

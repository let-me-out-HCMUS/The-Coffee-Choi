import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";
import convertToVND from "../utils/convertToVND";
import { getCategories } from "../services/categories";

// import menu from "../mocks/Category/data";

export default function Navbar() {
  // State to handle open/close in mobileview

  // const menu = ["Cà phê", "Trà", "Đá xay", "Bánh"];

  const story = ["Coffeeholic", "Teaholic", "Blog"];

  const { currentUser, logoutUser } = useContext(AuthContext);
  const { getCart, getCartQuantity, removeFromCart } = useContext(CartContext);

  const cart = getCart();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [menu, setMenu] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/auth", {
      replace: true,
    });
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getCategories();

      if (res.status === "fail") {
        return window.location.replace("/404");
      }

      setMenu(res.data.categories);
    };

    getData();
  }, []);

  return (
    <header className=" fixed top-0 mx-auto flex w-full justify-center border-b-2 border-solid bg-white bg-opacity-80 z-50">
      <div className=" relative flex w-full items-center justify-between bg-opacity-80 px-10">
        <button
          className="absolute left-4 lg:hidden text-xl"
          onClick={() => setIsOpenNav(true)}>
          <i className="fa-solid fa-bars" />
        </button>
        <Link
          to="/"
          className="py-[19px] text-2xl font-bold md:text-2xl lg:text-xl w-full lg:w-auto text-center">
          THE COFFE CHOI
        </Link>
        {/* Mobileview */}
        {isOpenNav && (
          <div className="fixed left-0 top-0 z-50 h-full w-[40vw] overflow-x-hidden overflow-y-scroll bg-white bg-opacity-95 p-0 transition-all lg:hidden">
            {/* close btn */}
            <button
              className=" w-full border-b-[1px] border-solid px-3 py-4 text-left"
              onClick={() => setIsOpenNav(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* list header */}
            <ul className=" pl-[16px]">
              <li className=" text-left">
                <Link
                  to={`/menu/coffee`}
                  className="leading-22px block w-full border-b-[1px] border-solid px-[17px] py-[16px] text-base font-bold">
                  Cà phê
                </Link>
              </li>
              <li className=" text-left">
                <Link
                  to={`/menu/tea`}
                  className="leading-22px block w-full border-b-[1px] border-solid px-[17px] py-[16px] text-base font-bold">
                  Trà
                </Link>
              </li>
              {/* Menu */}
              <li className=" text-left">
                <button
                  type="button"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                  className="leading-22px flex w-full items-center justify-between border-b-[1px] border-solid px-[16px] py-[17px] pr-[20px] text-base font-bold">
                  Menu <i className="fa-solid fa-caret-down"></i>
                </button>
                {isOpenMenu && (
                  <ul className="m-0 p-0 pl-[10px]">
                    <Link
                      to="/menu/all"
                      className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Tất cả
                    </Link>
                    {menu?.map((item, index) => (
                      <li
                        key={index}
                        className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                        <Link to={`/menu/${item.slug}`}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className=" text-left">
                <button
                  type="button"
                  onClick={() => setIsOpenStory(!isOpenStory)}
                  className="leading-22px flex w-full items-center justify-between border-b-[1px] border-solid px-[16px] py-[17px] pr-[20px] text-base font-bold">
                  Chuyện chòi <i className="fa-solid fa-caret-down"></i>
                </button>
                {isOpenStory && (
                  <ul className="m-0 p-0 pl-[10px]">
                    {story.map((item, index) => (
                      <li
                        key={index}
                        className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className=" text-left">
                <a
                  href=""
                  className="leading-22px block w-full border-b-[1px] border-solid px-[17px] py-[16px] text-base font-bold">
                  Cảm hứng
                </a>
              </li>
            </ul>
          </div>
        )}
        {/* PCview case */}
        <div className="ml-4 hidden lg:block">
          <ul className=" inline-flex">
            <li className=" px-[16px] py-[19px] text-base font-medium ">
              <Link
                to={`/menu/coffee`}
                className=" hover:cursor-pointer hover:text-amber-500">
                Cà phê
              </Link>
            </li>
            <li className=" px-[16px] py-[19px] text-base font-medium ">
              <Link
                to={`/menu/tea`}
                className=" hover:cursor-pointer hover:text-amber-500">
                Trà
              </Link>
            </li>
            {/* PC menu */}
            <li
              className=" px-[16px] py-[19px] text-base font-medium"
              onMouseOver={() => setIsOpenMenu(true)}
              onMouseOut={() => setIsOpenMenu(false)}>
              <a
                className=" hover:cursor-pointer hover:text-amber-500"
                href="#">
                Menu <i className="fa-solid fa-caret-down"></i>
              </a>

              {
                <div
                  className={`menu-transition menu-transition menu-transition ${
                    isOpenMenu ? "show" : ""
                  } absolute left-0 right-0 z-50 mt-[20px] flex w-[100%] flex-wrap justify-center bg-white`}>
                  <div className=" absolute h-[19px] w-full top-[-19px]"></div>
                  <ul className=" flex w-4/5 flex-wrap justify-center">
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <Link
                        to="/menu/all"
                        className=" hover:text-orange-400 border-b-2 border-solid border-black hover:border-orange-400">
                        Tất cả
                      </Link>
                    </li>
                    {menu?.map((item) => (
                      <li className=" float-none inline-block px-[2.2%] py-[12px]">
                        <Link
                          to={`/menu/${item.slug}`}
                          className=" hover:text-orange-400 border-b-2 border-solid border-black hover:border-orange-400">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            </li>
            {/* PC story */}
            <li
              className=" px-[16px] py-[19px] text-base font-medium "
              onMouseOver={() => setIsOpenStory(true)}
              onMouseOut={() => setIsOpenStory(false)}>
              <a
                href="#"
                className=" hover:cursor-pointer hover:text-amber-500">
                Chuyện chòi <i className="fa-solid fa-caret-down"></i>
              </a>
              {
                <div
                  className={`menu-transition menu-transition menu-transition ${
                    isOpenStory ? "show" : ""
                  } absolute left-0 right-0 z-50 mt-[20px] flex w-[100%] flex-wrap justify-center bg-white`}>
                  <ul className=" flex w-4/5 flex-wrap justify-center">
                    {story.map((item, index) => (
                      <li
                        key={index}
                        className=" float-none inline-block px-[2.2%] py-[12px]">
                        <a
                          href=""
                          className=" hover:text-orange-400 border-b-2 border-solid border-black hover:border-orange-400">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            </li>
          </ul>
        </div>

        <div className=" flex">
          {/* Cart */}
          <div
            className=" relative"
            onClick={() => setIsOpenCart(!isOpenCart)}
            onMouseOver={() => setIsOpenCart(true)}
            onMouseOut={() => setIsOpenCart(false)}>
            <i className="fa-solid fa-mug-hot cursor-pointer text-2xl text-amber-800" />
            <span className=" absolute right-[-14px] top-[-6px] rounded-[10px] border-2 border-solid border-amber-800 bg-white px-[6px] py-[1px] text-sm">
              {getCartQuantity()}
            </span>
            {isOpenCart && (
              <div className=" absolute right-0 z-50 w-[60vw] rounded-sm bg-white shadow-[0_1px_10px_rgba(0,0,0,0.2)] lg:w-[400px]">
                <h4 className=" my-[8px] ml-[12px] text-left text-sm font-medium text-gray-400">
                  Sản phẩm trong giỏ
                </h4>
                <ul className=" max-h-[56vh] list-none overflow-y-auto pl-0">
                  {cart.map((item) => (
                    <li
                      key={item._id}
                      className=" flex items-center hover:bg-slate-200">
                      <img
                        className=" boder-[1px] m-[12px] h-[42px] w-[42px] border-solid border-gray-200"
                        src={item.image}
                        alt=""
                      />
                      <div className=" mr-[12px] w-full">
                        <div className=" flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-sm">{item.name}</span>
                            <span className=" text-xs hidden md:block text-gray-500">
                              {item.size.name}
                            </span>
                            <span className="text-xs hidden md:line-clamp-1">
                              {item.toppings
                                .map((topping) => topping.name)
                                .join(", ")}
                            </span>
                          </div>
                          <div>
                            <span className=" text-sm font-normal">
                              {convertToVND(
                                item.price +
                                  item.size.price +
                                  item.toppings.reduce(
                                    (total, topping) => total + topping.price,
                                    0
                                  )
                              )}
                            </span>
                            <span className=" mx-[4px] text-xs text-gray-500">
                              x
                            </span>
                            <span className=" text-xs text-gray-500">
                              {item.quantity}
                            </span>
                          </div>
                        </div>
                        <div
                          onClick={() => {
                            removeFromCart(item);
                          }}
                          className=" flex cursor-pointer justify-end text-sm font-medium text-gray-500 hover:text-red-500">
                          Xoá
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link to="/payment">
                  <div className=" flex h-[50px] items-center justify-center bg-amber-800 text-base font-medium text-white">
                    <span className=" mr-[8px]">Xem giỏ hàng</span>
                    <i className="fa-solid fa-shopping-cart" />
                  </div>
                </Link>
              </div>
            )}
          </div>
          {/* Accout */}
          <div
            className=" ml-8 cursor-pointer text-center align-middle"
            onClick={() => setIsOpenUser(!isOpenUser)}>
            Hi, {currentUser && currentUser.name}
            {isOpenUser && (
              <div className=" absolute right-2 z-50 w-[20vw] rounded-sm bg-white shadow-[0_1px_10px_rgba(0,0,0,0.2)] lg:w-[180px]">
                <div className=" my-[8px] ml-[12px] text-left text-sm font-medium">
                  Số dư: 100.000đ
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg my-[8px] ml-[12px] text-left text-sm font-medium text-orange-400 hover:bg-slate-200">
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

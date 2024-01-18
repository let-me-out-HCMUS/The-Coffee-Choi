import { useState } from "react";

export default function Navbar() {
    // State to handle open/close in mobileview
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);

  return (
    <header className=" fixed top-0 mx-auto flex w-full justify-center border-b-2 border-solid bg-white bg-opacity-80 z-50">
      <div className=" relative flex w-full items-center justify-between bg-opacity-80 px-10">
        <button
          className="absolute left-4 lg:hidden text-xl"
          onClick={() => setIsOpenNav(true)}
        >
          <i className="fa-solid fa-bars"/>
        </button>
        <h1 className="py-[19px] text-2xl font-bold md:text-2xl lg:text-xl w-full lg:w-auto text-center">
          THE COFFE CHOI
        </h1>
        {/* Mobile case */}
        {isOpenNav && (
          <div className="fixed left-0 top-0 z-50 h-full w-[40vw] overflow-x-hidden overflow-y-scroll bg-white bg-opacity-95 p-0 transition-all lg:hidden">
            {/* close btn */}
            <button
              className=" w-full border-b-[1px] border-solid px-3 py-4 text-left"
              onClick={() => setIsOpenNav(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* list header */}
            <ul className=" pl-[16px]">
              <li className=" text-left">
                <a
                  href=""
                  className="leading-22px block w-full border-b-[1px] border-solid px-[17px] py-[16px] text-base font-bold"
                >
                  Cà phê
                </a>
              </li>
              <li className=" text-left">
                <a
                  href=""
                  className="leading-22px block w-full border-b-[1px] border-solid px-[17px] py-[16px] text-base font-bold"
                >
                  Trà
                </a>
              </li>
              {/* Menu */}
              <li className=" text-left">
                <button
                  type="button"
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                  className="leading-22px flex w-full items-center justify-between border-b-[1px] border-solid px-[16px] py-[17px] pr-[20px] text-base font-bold"
                >
                  Menu <i className="fa-solid fa-caret-down"></i>
                </button>
                {isOpenMenu && (
                  <ul className="m-0 p-0 pl-[10px]">
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Tất cả
                    </li>
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Cà phê
                    </li>
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Trà
                    </li>
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Đá xây
                    </li>
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Bánh
                    </li>
                  </ul>
                )}
              </li>
            
              <li className=" text-left">
                <button
                  type="button"
                  onClick={() => setIsOpenStory(!isOpenStory)}
                  className="leading-22px flex w-full items-center justify-between border-b-[1px] border-solid px-[16px] py-[17px] pr-[20px] text-base font-bold"
                >
                  Chuyện chòi <i className="fa-solid fa-caret-down"></i>
                </button>
                {isOpenStory && (
                  <ul className="m-0 p-0 pl-[10px]">
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Coffeeholic
                    </li>
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Teaholic
                    </li>
                    <li className="w-full border-b-[1px] border-solid py-[16px] text-sm font-medium">
                      Blog
                    </li>
                  </ul>
                )}
              </li>

              <li className=" text-left">
                <a
                  href=""
                  className="leading-22px block w-full border-b-[1px] border-solid px-[17px] py-[16px] text-base font-bold"
                >
                  Cảm hứng
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className="ml-4 hidden lg:block">
          <ul className=" inline-flex">
            <li className=" px-[16px] py-[19px] text-base font-medium ">
              <a href="" className=" hover:cursor-pointer hover:text-amber-500">
                Cà phê
              </a>
            </li>
            <li className=" px-[16px] py-[19px] text-base font-medium ">
              <a href="" className=" hover:cursor-pointer hover:text-amber-500">
                Trà
              </a>
            </li>
            <li
              className=" px-[16px] py-[19px] text-base font-medium"
              onMouseOver={() => setIsOpenMenu(true)}
              onMouseOut={() => setIsOpenMenu(false)}
            >
              <a
                className=" hover:cursor-pointer hover:text-amber-500"
                href="#"
              >
                Menu <i className="fa-solid fa-caret-down"></i>
              </a>
              {isOpenMenu && (
                <div className=" absolute left-0 right-0 z-50 mt-[20px] flex w-[100%] flex-wrap justify-center bg-white opacity-90">
                  <ul className=" flex w-4/5 flex-wrap justify-center">
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Tất cả
                      </a>
                    </li>
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Cà phê
                      </a>
                    </li>
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Trà
                      </a>
                    </li>
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Đá xây
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className=" px-[16px] py-[19px] text-base font-medium "
              onMouseOver={() => setIsOpenStory(true)}
              onMouseOut={() => setIsOpenStory(false)}
            >
              <a
                href="#"
                className=" hover:cursor-pointer hover:text-amber-500"
              >
                Chuyện chòi <i className="fa-solid fa-caret-down"></i>
              </a>
              {isOpenStory && (
                <div className=" absolute left-0 right-0 z-50 mt-[20px] flex w-[100%] flex-wrap justify-center bg-white opacity-90">
                  <ul className=" flex w-4/5 flex-wrap justify-center">
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Coffeeholic
                      </a>
                    </li>
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Teaholic
                      </a>
                    </li>
                    <li className=" float-none inline-block px-[2.2%] py-[12px]">
                      <a
                        href=""
                        className=" border-b-2 border-solid border-black"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className=" px-[16px] py-[19px] text-base font-medium ">
              <a href="" className=" hover:cursor-pointer hover:text-amber-500">
                Cảm hứng
              </a>
            </li>
          </ul>
        </div>

        <div className=" flex">
          <div
            className=" relative"
            onClick={() => setIsOpenCart(!isOpenCart)}
            onMouseOver={() => setIsOpenCart(true)}
            onMouseOut={() => setIsOpenCart(false)}
          >
            <i className="fa-solid fa-mug-hot cursor-pointer text-2xl text-amber-800" />
            <span className=" absolute right-[-14px] top-[-6px] rounded-[10px] border-2 border-solid border-amber-800 bg-white px-[6px] py-[1px] text-sm">
              3
            </span>
            {isOpenCart && (
              <div className=" absolute right-0 z-50 w-[60vw] rounded-sm bg-white shadow-[0_1px_10px_rgba(0,0,0,0.2)] lg:w-[400px]">
                <h4 className=" my-[8px] ml-[12px] text-left text-sm font-medium text-gray-400">
                  Sản phẩm trong giỏ
                </h4>
                <ul className=" max-h-[56vh] list-none overflow-y-auto pl-0">
                  <li className=" flex items-center hover:bg-slate-200">
                    <img
                      className=" boder-[1px] m-[12px] h-[42px] w-[42px] border-solid border-gray-200"
                      src="https://product.hstatic.net/1000075078/product/1639377926_bacsiunong_51fd4560c6b74a249176abc43f8f0ad6.jpg"
                      alt=""
                    />
                    <div className=" mr-[12px] w-full">
                      <div className=" flex items-center justify-between">
                        <h5>Bạc sỉu</h5>
                        <div>
                          <span className=" text-sm font-normal">29.000đ</span>
                          <span className=" mx-[4px] text-xs text-gray-500">
                            x
                          </span>
                          <span className=" text-xs text-gray-500">2</span>
                        </div>
                      </div>
                      <div className=" flex cursor-pointer justify-end text-sm font-medium text-gray-500 hover:text-red-500">
                        Xoá
                      </div>
                    </div>
                  </li>
                  
                </ul>
                <a href="">
                  <div className=" flex h-[50px] items-center justify-center bg-amber-800 text-base font-medium text-white">
                    <span className=" mr-[8px]">Xem giỏ hàng</span>
                    <i className="fa-solid fa-shopping-cart" />
                  </div>
                </a>
              </div>
            )}
          </div>
          <div className=" ml-8 cursor-pointer text-center align-middle" onClick={() => setIsOpenUser(!isOpenUser)}>
            ID
            {isOpenUser && (
              <div className=" absolute right-2 z-50 w-[20vw] rounded-sm bg-white shadow-[0_1px_10px_rgba(0,0,0,0.2)] lg:w-[180px]">
                <div className=" my-[8px] ml-[12px] text-left text-sm font-medium">
                  Số dư: 100.000đ
                </div>
                <div className=" my-[8px] ml-[12px] text-left text-sm font-medium text-gray-400 hover:bg-slate-200">
                  Đăng xuất
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import ThirdParty from "./ThirdParty";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/authContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors} } = useForm();

  const {loginUser} = React.useContext(AuthContext)
  
  const onSubmit = async (data) => {
    try {
      const loginData = await loginUser(data);
      if (loginData.status === "success"){
        toast.success("Đăng nhập thành công");
        navigate("/", {
          replace: true
        });
      }
      else {
        toast.error(loginData.message);
      }
    } 
      catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <form>
        <h1 className="mb-4 text-3xl font-bold text-orange-600 text-center dark:text-neutral-200">
          Đăng nhập
        </h1>
        {errors.email && <span className="text-red-500 text-sm">Vui lòng nhập email</span>}
        <TEInput
          type="email"
          label="Email"
          size="lg"
          className="mb-6"

          {...register("email", {required: true})}
        ></TEInput>

        {errors.password && <span className="text-red-500 text-sm">Vui lòng nhập mật khẩu</span>}
        <TEInput
          type="password"
          label="Mật khẩu"
          className="mb-6"
          size="lg"

          {...register("password", {required: true})}
        ></TEInput>

        <div className="mb-6 flex">
          <div className="mb-[0.125rem] block min-h-[1.5rem]">
            <TERipple
              onClick={() => setIsLogin(false)}
              type="button"
              className="text-primary cursor-pointer transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
            >
              Chưa có tài khoản, đăng kí ngay!
            </TERipple>
          </div>
        </div>

        <TERipple rippleColor="light" className="w-full">
          <button
            type="button"
            className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={handleSubmit(onSubmit)}
          >
            Đăng nhập
          </button>
        </TERipple>
      </form>

      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
          HOẶC
        </p>
      </div>

      <ThirdParty />
    </>
  );
};

export default Login;

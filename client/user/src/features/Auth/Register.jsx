import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: {errors}, watch, control } = useForm();

  const pw = watch("password", "");

  const {registerUser} = React.useContext(AuthContext)

  const onSubmit = async (data) => {
    try {
      const registerData = await registerUser(data);
      if (registerData.status === "success"){
        toast.success("Đăng kí thành công");
        navigate("/", {
          replace: true
        });
      }
      else {
        toast.error(registerData.message);
      }
    } 
      catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <form>
      <h1 className="mb-4 text-3xl font-bold text-orange-600 text-center dark:text-neutral-200">
        Đăng kí tài khoản
      </h1>

      {errors.name && <span className="text-red-500 text-sm">Vui lòng nhập họ tên</span>}
      <TEInput
        type="text"
        label="Họ tên"
        size="lg"
        className="mb-6"

        {...register("name", {required: true})}
      ></TEInput>


      {errors.email && <span className="text-red-500 text-sm">Vui lòng nhập email</span>}
      <TEInput
        type="email"
        label="Email"
        size="lg"
        className="mb-6"

        {...register("email", {required: true})}
      ></TEInput>


      {errors.password && <span className="text-red-500 text-sm">Mật khẩu phải tối thiểu 8 kí tự</span>}
      <TEInput
        type="password"
        label="Mật khẩu"
        className="mb-6"
        size="lg"

        {...register("password", {validate: (value) => value.length >= 8})}
      ></TEInput>


      {errors.confirmPassword && <span className="text-red-500 text-sm">Mật khẩu nhập lại không khớp</span>}
      <TEInput
        type="password"
        label="Nhập lại mật khẩu"
        className="mb-6"
        size="lg"

        {...register("confirmPassword", {validate: (value) => value === pw})}
      ></TEInput>

      {errors.address && <span className="text-red-500 text-sm">Vui lòng địa chỉ</span>}
      <TEInput
        type="text"
        label="Địa chỉ"
        size="lg"
        className="mb-6"

        {...register("address", {required: true})}
      ></TEInput>

      <div className="mb-6 flex">
        <div className="mb-[0.125rem] block min-h-[1.5rem]">
          <TERipple
            onClick={() => setIsLogin(true)}
            type="button"
            className="text-primary cursor-pointer transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Quay về đăng nhập!
          </TERipple>
        </div>
      </div>

      <TERipple rippleColor="light" className="w-full">
        <button
          type="button"
          className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={handleSubmit(onSubmit)}
        >
          Đăng kí
        </button>
      </TERipple>
    </form>
  );
};

export default Register;

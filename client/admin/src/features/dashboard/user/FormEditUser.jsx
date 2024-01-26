import { useForm } from "react-hook-form";

export default function FormEdit({ editUser, user }) {
  const { register, handleSubmit } = useForm({ defaultValues: user });

  return (
    <>
      <form onSubmit={handleSubmit(editUser)}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Tên</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("name", { required: true })}
            type="text"
            placeholder="Tên"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Email</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("email", { required: true })}
            type="text"
            placeholder="Email"
          />
        </div> */}
        {/* <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Mật khẩu</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("password", { required: true })}
            type="password"
            placeholder="Mật khẩu"
          />
        </div> */}
        {/* <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Địa chỉ</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("address")}
            type="text"
            placeholder="Địa chỉ"
          />
        </div> */}
        {/* <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Quyền</label>
          <select
            className="w-full px-3 py-2 leading-tight border rounded  appearance-none focus:outline-none focus:shadow-outline"
            {...register("role")}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div> */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Tiền nạp</label>
          <input
            className="w-full px-3 py-2 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            {...register("money", {
              valueAsNumber: true,
            })}
            type="text"
            placeholder="Tiền nạp"
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-amber-700 rounded hover:bg-amber-500 focus:outline-none focus:shadow-outline"
            type="submit">
            Xác nhận
          </button>
        </div>
      </form>
    </>
  );
}

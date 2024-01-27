import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FilterForm({ filterValue, submitFilter, resetFilter }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("price.from", filterValue?.price ? filterValue?.price.from : 1000);
    setValue("price.to", filterValue?.price ? filterValue?.price.to : 9999999);
    setValue(
      "isDiscount",
      filterValue.isDiscount ? filterValue.isDiscount : false
    );
  }, [filterValue, setValue]);

  const onSubmit = (data) => submitFilter(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mb-4">
          <label htmlFor="" className=" block mb-2 font-semibold">
            Giá (vnđ)
          </label>
          <div className=" flex gap-x-2">
            <input
              type="text"
              className=" w-1/2 border-2 border-solid border-gray-300 rounded-lg px-4 py-1"
              placeholder="Từ"
              {...register("price.from", {
                valueAsNumber: true,
                min: 0,
                max: 9999999,
                validate: (value) => value <= watch("price.from"),
              })}
            />
            <input
              type="text"
              className=" w-1/2 border-2 border-solid border-gray-300 rounded-lg px-4 py-1"
              placeholder="Đến"
              {...register("price.to", {
                valueAsNumber: true,
                min: 0,
                max: 9999999,
                validate: (value) => value >= watch("price.to"),
              })}
            />
          </div>
          <div>
            {errors.price?.from?.type === "validate" && (
              <p className=" text-red-500 text-sm">
                Giá khởi điểm phải nhỏ hơn giá cuối cùng
              </p>
            )}
            {errors.price?.to?.type === "validate" && (
              <p className=" text-red-500 text-sm">
                Giá cuối cùng phải lớn hơn giá khởi điểm
              </p>
            )}
          </div>
        </div>

        {/* <div className=" mb-4">
          <label htmlFor="" className=" block mb-2 font-semibold">
            Đánh giá (1-5 <i className="fa-solid fa-star text-yellow-400"></i>)
          </label>
          <div className=" flex gap-x-2">
            <input
              type="number"
              className=" w-1/2 border-2 border-solid border-gray-300 rounded-lg px-4 py-1"
              placeholder="Từ"
              {...register("rating.from", {
                min: 1,
                max: 5,
                defaultValue: 1,
                valueAsNumber: true,
                validate: (value) => value <= watch("rating.to"),
              })}
            />
            <input
              type="number"
              className=" w-1/2 border-2 border-solid border-gray-300 rounded-lg px-4 py-1"
              placeholder="Đến"
              {...register("rating.to", {
                min: 1,
                max: 5,
                defaultValue: 5,
                valueAsNumber: true,
                validate: (value) => value >= watch("rating.from"),
              })}
            />
          </div>
          <div>
            {errors.rating?.from?.type === "validate" && (
              <p className=" text-red-500 text-sm">
                Đánh giá khởi đầu phải nhỏ hơn đánh giá cuối cùng
              </p>
            )}
            {errors.rating?.to?.type === "validate" && (
              <p className=" text-red-500 text-sm">
                Đánh giá cuối cùng phải lớn hơn đánh giá khởi đầu
              </p>
            )}
          </div>
        </div> */}

        <div className=" mb-4 flex">
          <label htmlFor="" className=" block mr-2 font-semibold">
            Giảm giá
          </label>
          <div className=" flex gap-x-2">
            <input
              type="checkbox"
              className=" border-2 border-solid border-gray-300 rounded-lg px-4 py-1"
              {...register("isDiscount")}
            />
          </div>
        </div>

        <div className=" mb-4 flex justify-end">
          <button
            onClick={() => {
              reset();
              resetFilter();
            }}
            className=" text-red-500 py-1 px-2 mr-4 rounded border-2 border-solid text-sm border-red-500">
            Bỏ chọn
          </button>
          <button
            type="submit"
            className=" bg-amber-700 text-white py-1 px-2 rounded border-2 border-solid text-sm border-gray-200">
            <i className="fa-solid fa-filter mr-2"></i>
            Lọc
          </button>
        </div>
      </form>
    </div>
  );
}

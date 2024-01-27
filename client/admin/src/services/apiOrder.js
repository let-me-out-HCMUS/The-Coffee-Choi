import { axiosClient } from "./axiosClient";

export async function getOrders() {
  return await axiosClient
    .get("/orders")
    .then(function (response) {
      console.log("Get Orders OK", response);
      return {
        orders: response.data,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Get Orders ERROR", error);
      return {
        orders: null,
        error,
      };
    });
}

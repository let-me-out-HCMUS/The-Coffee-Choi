import { axiosClient } from "./axiosClient";

export async function getOrders() {
  return await axiosClient
    .get("/orders")
    .then(function (response) {
      console.log("Get Orders OK", response);
      return {
        orders: response.data,
        count: response.results,
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

export async function getOrderById(id) {
  return await axiosClient
    .get(`/orders/${id}`)
    .then(function (response) {
      console.log("Get Order OK", response);
      return {
        order: response.data,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Get Order ERROR", error);
      return {
        order: null,
        error,
      };
    });
}

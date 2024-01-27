import { axiosClient } from "./axiosClient";

export async function getOrders() {
  return await axiosClient
    .get("/orders")
    .then(function (response) {
      return {
        orders: response.data,
        count: response.results,
        error: null,
      };
    })
    .catch(function (error) {
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
      return {
        order: response.data,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        order: null,
        error,
      };
    });
}

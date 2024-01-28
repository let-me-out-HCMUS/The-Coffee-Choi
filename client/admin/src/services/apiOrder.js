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

export async function updateOrder(order) {
  console.log("Update order", order);

  console.log("Update order status", { status: order.action });
  return await axiosClient
    .patch(`/orders/${order.id}`, { status: order.action })
    .then(function (response) {
      console.log("Update order response", response);
      return {
        order: response.data,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Update order error", error);
      return {
        order: null,
        error,
      };
    });
}

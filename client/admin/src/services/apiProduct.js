import { axiosClient, axiosClientFormData } from "./axiosClient";

export async function addProduct(product) {
  console.log("product", product);
  return await axiosClientFormData
    .post(`/products`, product)
    .then(function (response) {
      console.log("OK", response);
      return {
        category: response.data.category,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("ERR", error);
      return {
        category: null,
        error,
      };
    });
}

export async function getProducts() {
  return await axiosClient
    .get("/products")
    .then(function (response) {
      return {
        products: response.data.products,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        products: null,
        error,
      };
    });
}

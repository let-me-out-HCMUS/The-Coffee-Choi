import { axiosClient, axiosClientFormData } from "./axiosClient";

export async function addProduct(product) {
  return await axiosClientFormData
    .post(`/products`, product.data)
    .then(function (response) {
      return {
        category: response.data.category,
        error: null,
      };
    })
    .catch(function (error) {
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

export async function deleteProduct(slug) {
  return await axiosClient
    .delete(`/products/${slug}`)
    .then(function (response) {
      return {
        response: response,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        status: 404,
        error,
      };
    });
}

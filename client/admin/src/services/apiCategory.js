import { axiosClient } from "./axiosClient";

export async function getAll() {
  return await axiosClient
    .get("/categories")
    .then(function (response) {
      console.log("Get all categories OK", response);
      return {
        categories: response.data.categories,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Get all categories ERROR", error);
      return {
        categories: null,
        error,
      };
    });
}

export async function getProductsFromSlug(slug) {
  console.log("Get products from slug", slug);
  return await axiosClient
    .get(`/categories/${slug}`)
    .then(function (response) {
      console.log("Get products from slug OK", response);
      return {
        products: response.data.products,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Get products from slug ERROR", error);
      return {
        products: null,
        error,
      };
    });
}

export async function addCategory(category) {
  console.log("Add category", category.data);
  return await axiosClient
    .post("/categories", category.data)
    .then(function (response) {
      console.log("Add category OK", response);
      return {
        category: response.data.category,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Add category ERROR", error);
      return {
        category: null,
        error,
      };
    });
}

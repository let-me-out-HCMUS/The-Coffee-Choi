import { axiosClient } from "./axiosClient";

export async function getAll() {
  return await axiosClient
    .get("/categories")
    .then(function (response) {
      return {
        categories: response.data.categories,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        categories: null,
        error,
      };
    });
}

export async function getProductsFromSlug(slug) {
  return await axiosClient
    .get(`/categories/${slug}`)
    .then(function (response) {
      return {
        category: response.data.category,
        products: response.data.products,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        category: null,
        products: null,
        error,
      };
    });
}

export async function addCategory(category) {
  return await axiosClient
    .post("/categories", category.data)
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

export async function updateCategory(category) {
  return await axiosClient
    .patch(`/categories/${category.data.slug}`, category.data)
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

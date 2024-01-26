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

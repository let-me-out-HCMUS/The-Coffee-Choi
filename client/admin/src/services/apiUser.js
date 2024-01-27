import { axiosClient } from "./axiosClient";
export async function getAllUser() {
  return await axiosClient
    .get("/users/getAllUsers")
    .then(function (response) {
      return {
        data: response.data,
        count: response.results,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        data: null,
        error,
      };
    });
}

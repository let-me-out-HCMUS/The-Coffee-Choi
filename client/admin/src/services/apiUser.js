import { axiosClient } from "./axiosClient";
export async function getAllUser() {
  return await axiosClient
    .get("/users/getAllUsers")
    .then(function (response) {
      console.log("getAllUser OK", response);
      return {
        data: response.data,
        count: response.results,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("getAllUser ERROR", error);
      return {
        data: null,
        error,
      };
    });
}

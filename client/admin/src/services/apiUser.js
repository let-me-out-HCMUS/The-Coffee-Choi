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

export async function signUp(data) {
  return await axiosClient
    .post("/users/signup", data)
    .then(function (response) {
      return {
        data: response.data,
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

export async function getCurrentUser() {
  return await axiosClient
    .get("/users")
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

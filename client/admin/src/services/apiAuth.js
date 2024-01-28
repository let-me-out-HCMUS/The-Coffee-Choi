import { axiosClient } from "./axiosClient";

async function validate(email, password) {
  return await axiosClient
    .post("/users/login", {
      email,
      password,
    })
    .then(function (response) {
      return {
        user: response.token,
        error: null,
      };
    })
    .catch(function (error) {
      return {
        user: null,
        error,
      };
    });
}

export async function login({ email, password }) {
  const { user, error } = await validate(email, password);

  if (error) throw new Error(error.message);

  return user;
}

export async function logout() {
  localStorage.removeItem("token");
  return {
    data: null,
    error: null,
  };
}

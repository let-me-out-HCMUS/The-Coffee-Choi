import { axiosClient } from "./axiosClient";

async function validate(email, password) {
  return await axiosClient
    .post("/users/login", {
      email,
      password,
    })
    .then(function (response) {
      console.log("Validate OK", response);
      return {
        user: response.token,
        error: null,
      };
    })
    .catch(function (error) {
      console.log("Validate ERROR", error);
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

  // return await axios
  //   .post("http://localhost:8000/api/v1/users/logout")
  //   .then(function (response) {
  //     console.log(response);
  //     return {
  //       data: response.data,
  //       error: null,
  //     };
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     return {
  //       data: null,
  //       error,
  //     };
  //   });
}

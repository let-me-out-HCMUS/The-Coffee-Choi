import axios from "axios";

async function validate(email, password) {
  return await axios
    .post("http://localhost:8000/api/v1/users/login", {
      email,
      password,
    })
    .then(function (response) {
      console.log(response);
      return {
        data: response.data,
        error: null,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        data: null,
        error,
      };
    });
}

export async function login({ email, password }) {
  const { data, error } = await validate(email, password);

  if (error) throw new Error(error.message);

  return data;
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

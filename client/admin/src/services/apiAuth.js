// import { account as credentials } from "../mocks/login";
import axios from "axios";

// function mockValidate(email, password) {
//   console.log("Validating...");
//   console.log(`Provided email: ${email}, password: ${password}`);
//   console.log(`Credentials: ${credentials.email}, ${credentials.password}`);

//   if (email === credentials.email && password === credentials.password) {
//     return {
//       data: { email, password },
//       error: null,
//     };
//   } else
//     return {
//       data: null,
//       error: "user not found",
//     };
// }

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

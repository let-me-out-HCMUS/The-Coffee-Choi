import { account as credentials } from "../mocks/login";

function mockValidate(email, password) {
  console.log("Validating...");
  console.log(`Provided email: ${email}, password: ${password}`);
  console.log(`Credentials: ${credentials.email}, ${credentials.password}`);

  if (email === credentials.email && password === credentials.password) {
    return {
      data: { email, password },
      error: null,
    };
  } else
    return {
      data: null,
      error: "user not found",
    };
}

export async function login({ email, password }) {
  const { data, error } = mockValidate(email, password);

  if (error) throw new Error(error);

  return data;
}

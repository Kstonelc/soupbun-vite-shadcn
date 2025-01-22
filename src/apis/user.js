import { apiPost } from "./request.js";

export const loginUser = (data) => {
  return apiPost("/user/login-user", data);
};

export const registerUser = (data) => {
  return apiPost("/user/register-user", data);
};

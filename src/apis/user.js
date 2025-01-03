import { apiPost } from "./request.js";

export const login = (data) => {
  return apiPost("/login", data);
};

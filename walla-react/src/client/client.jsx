import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3001",
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject({
        message: error.response.statusText,
        ...error.response,
        ...error.response.data,
      });
    }

    return Promise.reject({ message: error.message });
  }
);

export const setAuthHeader = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export const removeAuthHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

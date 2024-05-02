import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:3001",
});

client.interceptors.response.use((response) => response.data);

export const setAuthHeader = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export const removeAuthHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

import { client } from "../client/client.jsx";

export const login = (credentials) => {
  return client.post("/api/auth/login", credentials);
};

export default login;

import { client, setAuthHeader } from "../client/client.jsx";

export const login = async (credentials) => {
  return client
    .post("/api/auth/login", credentials)
    .then(({ accessToken }) => setAuthHeader(accessToken));
};

export default login;

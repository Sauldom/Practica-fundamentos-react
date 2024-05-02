import { client, removeAuthHeader, setAuthHeader } from "../client/client.jsx";
import storage from "../util/storage.jsx";

export const login = async (credentials) => {
  return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
    storage.set("auth", accessToken);
    setAuthHeader(accessToken);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthHeader();
    storage.remove("auth");
  });
};

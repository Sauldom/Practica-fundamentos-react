import { client, removeAuthHeader, setAuthHeader } from "../client/client.jsx";
import storage from "../util/storage.jsx";

export const login = async (credentials, Check) => {
  return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
    Check
      ? storage.setLocal("auth", accessToken)
      : storage.setSession("auth", accessToken);
    setAuthHeader(accessToken);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthHeader();
    storage.remove("auth");
  });
};

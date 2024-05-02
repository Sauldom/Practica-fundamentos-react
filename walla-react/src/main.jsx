import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import storage from "./util/storage.jsx";
import { setAuthHeader } from "./client/client.jsx";
import { AuthContextProvider } from "./authorize/context.jsx";

const accessToken = storage.get("auth");
if (accessToken) {
  setAuthHeader(accessToken);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider isDefaultLogged={!!accessToken}>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

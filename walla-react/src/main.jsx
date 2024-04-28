import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import storage from "./util/storage.jsx";
import { setAuthHeader } from "./client/client.jsx";

const accessToken = storage.get("auth");
if (accessToken) {
  setAuthHeader(accessToken);
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App isDefaultLogged={!!accessToken} />
  </React.StrictMode>
);

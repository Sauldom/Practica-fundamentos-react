import { createContext, useContext, useState } from "react";
import storage from "../util/storage.jsx";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthContextProvider = ({ isDefaultLogged, children }) => {
  const [isLogged, setIsLogged] = useState(isDefaultLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => {
    setIsLogged(false);
    storage.remove("auth");
  };
  const authValue = {
    isLogged,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
AuthContextProvider.propTypes = {
  children: PropTypes.node,
  isDefaultLogged: PropTypes.bool.isRequired,
};
export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

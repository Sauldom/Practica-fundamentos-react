import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

function AuthRoute({ children }) {
  const { isLogged } = useAuth();
  return isLogged ? children : <Navigate to="/" />;
}

export default AuthRoute;

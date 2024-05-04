import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";

function AuthRoute({ children }) {
  const location = useLocation();
  const { isLogged } = useAuth();
  return isLogged ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location.pathname }} replace />
  );
}

export default AuthRoute;

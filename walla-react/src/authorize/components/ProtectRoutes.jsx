import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";
import PropTypes from "prop-types";

function AuthRoute({ children }) {
  const location = useLocation();
  const { isLogged } = useAuth();
  return isLogged ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location.pathname }} replace />
  );
}
AuthRoute.propTypes = {
  children: PropTypes.node,
};
export default AuthRoute;

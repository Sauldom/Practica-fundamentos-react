import { useNavigate } from "react-router-dom";
import { logout } from "../../../authorize/service.jsx";
import Button from "../StyledButton.jsx";

function LogoutButton({ onLogout }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "¿Estás seguro de que deseas cerrar sesión?"
    );

    if (confirmLogout) {
      logout();
      navigate("/");
    }
  };

  return <Button onClick={handleLogout}>Cerrar sesión</Button>;
}
export default LogoutButton;

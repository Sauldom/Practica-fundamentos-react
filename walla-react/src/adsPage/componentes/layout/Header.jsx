import LogoComponent from "../../../assets/LogoComponent";
import Button from "../StyledButton";
import { useAuth } from "../../../authorize/context.jsx";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoutButton from "../logoutButton/logOut.jsx";
import "./headerStyle.css";
function Header() {
  const { isLogged, onLogout } = useAuth();
  const location = useLocation();

  return (
    <header>
      <Link to="/adverts">
        <div className="header-logo">
          <LogoComponent width={32} height={32} />{" "}
        </div>
      </Link>
      {location.pathname !== "/login" && (
        <nav>
          {location.pathname !== "/adverts/new" && (
            <NavLink to="/adverts/new">
              <Button className="">Crear Anuncio</Button>
            </NavLink>
          )}

          {isLogged ? (
            <LogoutButton className="logout-button" onClick={onLogout}>
              Log out
            </LogoutButton>
          ) : null}
        </nav>
      )}
    </header>
  );
}
export default Header;

import LogoComponent from "../../../assets/LogoComponent";
import Button from "../StyledButton";
import { useAuth } from "../../../authorize/context.jsx";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { isLogged, onLogout } = useAuth();

  return (
    <header>
      <Link to="/adverts">
        <div className="header-logo">
          <LogoComponent width={32} height={32} />{" "}
        </div>
      </Link>
      <nav>
        <NavLink to="/adverts/new">
          <Button>Crear Anuncio</Button>
        </NavLink>

        {isLogged ? (
          <NavLink to="/">
            <Button onClick={onLogout}>Log out</Button>
          </NavLink>
        ) : null}
      </nav>
    </header>
  );
}
export default Header;

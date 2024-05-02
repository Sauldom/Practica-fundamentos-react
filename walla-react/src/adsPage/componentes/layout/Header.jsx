import LogoComponent from "../../../assets/LogoComponent";
import Button from "../StyledButton";
import { useAuth } from "../../../authorize/context.jsx";

function Header() {
  const { isLogged, onLogout } = useAuth();

  return (
    <header>
      <div>
        <LogoComponent width={32} height={32} />
        <nav>
          <Button>Crear Anuncio</Button>
          {isLogged ? <Button onClick={onLogout}>Log out</Button> : null}
        </nav>
      </div>
    </header>
  );
}
export default Header;

import LogoComponent from "../../../assets/LogoComponent";
import Button from "../StyledButton";

function Header() {
  return (
    <header>
      <div>
        <LogoComponent width={32} height={32} />
        <nav>
          <Button>Crear Anuncio</Button>
        </nav>
      </div>
    </header>
  );
}
export default Header;

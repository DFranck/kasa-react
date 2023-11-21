import logo from "../../assets/images/desktop-header-logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="header-styles">
      <img src={logo} alt="kasa header logo" />
      <ul>
        <Link to={"/"}>Acceuil</Link>
        <Link to={"/Apropos"}>A Propos</Link>
      </ul>
    </header>
  );
}
export default Header;

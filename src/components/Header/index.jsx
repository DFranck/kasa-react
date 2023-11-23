import logoDesktop from "../../assets/images/desktop-header-logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();

  return (
    <header className="header-styles">
      <img src={logoDesktop} alt="kasa header logo" />
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to={"/"}>Acceuil</Link>
        </li>
        <li className={location.pathname === "/Apropos" ? "active" : ""}>
          <Link to={"/Apropos"}>A Propos</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;

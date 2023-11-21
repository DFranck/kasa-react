import "./index.scss";
import logo from "../../assets/images/desktop-footer-logo.svg";
function Footer() {
  return (
    <footer className="footer-styles">
      <img src={logo} alt="kasa footer logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;

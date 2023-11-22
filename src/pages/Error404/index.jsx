import "./index.scss";
import errorImg from "../../assets/images/Erreur 404.svg";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-404">
      <img src={errorImg} alt="Error 404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;

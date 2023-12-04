import { useParams, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import "./index.scss";
import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import Note from "../../components/Note";
import { useEffect } from "react";

function Logement() {
  let { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location.state) {
      console.log("path non reconnu");
      navigate("/404");
    }
  }, [location.state, navigate]);
  if (!location.state) {
    return null;
  }
  const card = location.state.card;
  const name = card.host.name.split(" ").pop();
  const surName = card.host.name.split(" ").shift();
  return (
    <main className="logement-container">
      <Carrousel pictures={card.pictures} />
      <section className="infos-container">
        <section className="left-container">
          <h1>{card.title}</h1>
          <p>{card.location}</p>
          <Tags tags={card.tags} id={card.id} />
        </section>
        <section className="right-container">
          <figure className="host-container">
            <figcaption className="host-name">
              <h2>{surName}</h2>
              <h2>{name}</h2>
            </figcaption>
            <img src={card.host.picture} alt="" />
          </figure>
          <Note note={card.rating} id={card.id} />
        </section>
      </section>
      <section className="logement-dropdown-container">
        <Dropdown title="Déscription" content={card.description} id={id} />
        <Dropdown title="Équipments" content={card.equipments} id={id} />
      </section>
    </main>
  );
}

export default Logement;

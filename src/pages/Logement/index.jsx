import { useParams, useLocation } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import "./index.scss";
import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import Note from "../../components/Note";

function Logement() {
  let { id } = useParams();
  const location = useLocation();
  const card = location.state.card;
  const name = card.host.name.split(" ").pop();
  const surName = card.host.name.split(" ").shift();
  return (
    <div className="logement-container">
      <Carrousel pictures={card.pictures} />
      <div className="infos-container">
        <div className="left-container">
          <h1>{card.title}</h1>
          <p>{card.location}</p>
          <Tags tags={card.tags} id={card.id} />
        </div>
        <div className="right-container">
          <div className="host-container">
            <div className="host-name">
              <h2>{surName}</h2>
              <h2>{name}</h2>
            </div>
            <img src={card.host.picture} alt="" />
          </div>
          <Note note={card.rating} id={card.id} />
        </div>
      </div>
      <div className="logement-dropdown-container">
        <Dropdown
          title="description"
          size="medium"
          content={card.description}
          id={id}
        />
        <Dropdown
          title="equipments"
          size="medium"
          content={card.equipments}
          id={id}
        />
        <Dropdown
          title="description"
          size="small"
          content={card.description}
          id={id}
        />
        <Dropdown
          title="equipments"
          size="small"
          content={card.equipments}
          id={id}
        />
      </div>
    </div>
  );
}

export default Logement;

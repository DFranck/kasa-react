import "./index.scss";
import { useNavigate } from "react-router-dom";

function Cards({ data }) {
  let navigate = useNavigate();
  const handleCard = (card) => {
    navigate(`/logement/${card.id}`, { state: { card } });
  };
  return (
    <ul className="cards-container">
      {data.map((card) => {
        return (
          <li key={card.id} className="card" onClick={() => handleCard(card)}>
            <img
              src={card.pictures[0]}
              alt={"image de l'annonce de: " + card.title}
            />
            <span className="card-title">
              <h2>{card.title}</h2>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Cards;

import "./index.scss";
import { useNavigate } from "react-router-dom";

function Cards({ data }) {
  let navigate = useNavigate();
  console.log(data);
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
            <h2 className="card-title">{card.title}</h2>
          </li>
        );
      })}
    </ul>
  );
}

export default Cards;

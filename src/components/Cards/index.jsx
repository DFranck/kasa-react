import "./index.scss";

function Cards({ data }) {
  console.log(data);
  return (
    <ul className="cards-container">
      {data.map((card) => {
        return (
          <li key={card.id} className="card">
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

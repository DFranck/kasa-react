import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function Logement() {
  let { id } = useParams();
  const location = useLocation();
  const card = location.state.card;
  console.log(card);
  const [picture, setPicture] = useState(card.pictures[0]);
  return (
    <div id={id}>
      <div className="carrousel">
        <img src={picture} alt="" />
      </div>
      <div>
        <h1>{card.title}</h1>
        <p>{card.location}</p>
      </div>
      <div className="host-container">
        <h2>{card.host.name}</h2>
        <img src={card.host.picture} alt="" />
      </div>
    </div>
  );
}

export default Logement;

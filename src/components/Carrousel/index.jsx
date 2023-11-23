import { useState } from "react";
import "./index.scss";
import previousVector from "../../assets/images/Previous Vector.png";
import nextVector from "../../assets/images/Next Vector.png";
function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);
  const goToPrevious = () => {
    setIndex(index >= 1 ? index - 1 : pictures.length);
  };
  const goToNext = () => {
    setIndex(index < pictures.length - 1 ? index + 1 : 0);
  };
  return (
    <div className="carrousel">
      <button className="previous-btn" onClick={() => goToPrevious()}>
        <img
          src={previousVector}
          alt={`position numéro ${index + 1} dans le carrousel`}
          loading="lazy"
          className="vector"
        />
      </button>
      <img src={pictures[index]} alt="" />
      <p>{`${index + 1}/${pictures.length}`}</p>
      <button className="next-btn" onClick={() => goToNext()}>
        <img src={nextVector} alt="" className="vector" />
      </button>
    </div>
  );
}

export default Carrousel;

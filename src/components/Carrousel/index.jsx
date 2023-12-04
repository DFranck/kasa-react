import { useState } from "react";
import "./index.scss";
import previousVector from "../../assets/images/Previous Vector.png";
import nextVector from "../../assets/images/Next Vector.png";
function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);
  if (pictures.length === 0) {
    const hideTargets = document.querySelectorAll(
      "previous-btn, index-number, next-btn "
    );
    hideTargets.classList.add("hide");
  }
  const goToPrevious = () => {
    setIndex(index > 0 ? index - 1 : pictures.length - 1);
  };
  const goToNext = () => {
    setIndex(index < pictures.length - 1 ? index + 1 : 0);
  };
  return (
    <div className="carrousel">
      {pictures.length === 1 ? (
        <img src={pictures[index]} alt={pictures[index]} />
      ) : (
        <div>
          <button className="previous-btn" onClick={() => goToPrevious()}>
            <img
              src={previousVector}
              alt={`position numéro ${index + 1} dans le carrousel`}
              loading="lazy"
              className="vector"
            />
          </button>
          <img src={pictures[index]} alt={pictures[index]} />
          <p className="index-number">{`${index + 1}/${pictures.length}`}</p>
          <button className="next-btn" onClick={() => goToNext()}>
            <img src={nextVector} alt="" className="vector" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrousel;

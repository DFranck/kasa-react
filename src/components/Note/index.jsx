import activeStar from "../../assets/images/active star.png";
import inactiveStar from "../../assets/images/inactive star.png";
import mobileActiveStar from "../../assets/images/mobile-active-star.png";
import mobileInctiveStar from "../../assets/images/mobile-inactive-star.png";

import "./index.scss";

function Note({ note, id }) {
  const maxNote = 5;
  const stars = [];
  const mobileStars = [];
  for (let i = 0; i < maxNote; i++) {
    stars.push(
      <img
        key={id + i}
        src={i < note ? activeStar : inactiveStar}
        alt={i < note ? "Active Star" : "Inactive Star"}
      />
    );
  }
  for (let i = 0; i < maxNote; i++) {
    mobileStars.push(
      <img
        key={id + i}
        src={i < note ? mobileActiveStar : mobileInctiveStar}
        alt={i < note ? "Active Star" : "Inactive Star"}
      />
    );
  }
  console.log(stars);
  return (
    <div>
      <div className="desktop-note">{stars}</div>
      <div className="mobile-note">{mobileStars}</div>
    </div>
  );
}

export default Note;

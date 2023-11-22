import { useEffect, useState } from "react";
import "./index.scss";
import upVector from "../../assets/images/Up Vector.png";
import downVector from "../../assets/images/Down Vector.png";

function Dropdown({ title, description, equipments, size }) {
  const [isDropdownOpen, setDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState();
  const [vector, setVector] = useState(upVector);
  useEffect(() => {
    if (title === "description") {
      setDropdownContent(
        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
      );
    } else if (title === "equipments") {
      const content = [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI",
      ];
      setDropdownContent(
        content.map((item) => {
          return <li>{item}</li>;
        })
      );
    } else {
      setDropdownContent(
        `IL N'Y A PAS DE CONTENU POUR CETTE PARTIE ALORS JE MEUBLE POUR CODER`
      );
    }
  }, [title, description, equipments]);
  const toogleDropdown = () => {
    const content = document.querySelector(`.${title}-content.${size}`);
    if (isDropdownOpen) {
      content.classList.remove("show-content");
      content.classList.add("hide-content");
      setDropdown(false);
      setVector(upVector);
    } else {
      content.classList.add("show-content");
      content.classList.remove("hide-content");
      setDropdown(true);
      setVector(downVector);
    }
  };
  return (
    <div className={`dropdown-container ${size}`}>
      <button onClick={() => toogleDropdown()}>
        {title}
        <img src={vector} alt="vector arraw" />
      </button>
      <div className={`${title}-content hide-content ${size}`}>
        {dropdownContent}
      </div>
    </div>
  );
}

export default Dropdown;

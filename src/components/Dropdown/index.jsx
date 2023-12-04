import { useEffect, useState } from "react";
import "./index.scss";
import upVector from "../../assets/images/Up Vector.png";
import downVector from "../../assets/images/Down Vector.png";

function Dropdown({ title, description, equipments, size, content, id }) {
  const [isDropdownOpen, setDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState();
  const [vector, setVector] = useState(upVector);
  useEffect(() => {
    if (title === "description") {
      const descriptionContent = content;
      setDropdownContent(descriptionContent);
    } else if (title === "equipments") {
      const contentList = content;
      setDropdownContent(
        contentList.map((item) => {
          return <li key={id + item}>{item}</li>;
        })
      );
    } else if (title === "Fiabilité") {
      setDropdownContent(
        `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
      );
    } else if (title === "Respect") {
      setDropdownContent(
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
      );
    } else if (title === "Service") {
      setDropdownContent(
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
      );
    } else if (title === "Sécurité") {
      setDropdownContent(
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      );
    }
  }, [title, description, equipments, content, id]);
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

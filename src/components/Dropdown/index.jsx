import { useEffect, useState } from "react";

function Dropdown({ title, description, equipments }) {
  const [isDropdownOpen, setDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState();
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
    const content = document.querySelector(`.${title}-content`);
    if (isDropdownOpen) {
      content.classList.remove("show-content");
      setDropdown(false);
    } else {
      content.classList.add("show-content");
      setDropdown(true);
    }
  };
  return (
    <div className={`${title}-dropdown`}>
      <button onClick={() => toogleDropdown()}>{title}</button>
      <div className={`${title}-content`}>{dropdownContent}</div>
    </div>
  );
}

export default Dropdown;

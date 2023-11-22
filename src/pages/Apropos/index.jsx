import Dropdown from "../../components/Dropdown";

function Apropos() {
  return (
    <div>
      <h1>Apropos</h1>
      <Dropdown title={"Fiabilité"} />
      <Dropdown title={"Respect"} />
      <Dropdown title={"Service"} />
      <Dropdown title={"Sécurité"} />
      <Dropdown title={"description"} />
      <Dropdown title={"equipments"} />
    </div>
  );
}

export default Apropos;

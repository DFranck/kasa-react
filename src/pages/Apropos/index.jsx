import Dropdown from "../../components/Dropdown";
import titlePicture from "../../assets/images/Image source 2.png";
import "./index.scss";
import Banner from "../../components/Banner";
function Apropos() {
  return (
    <div className="a-propos-container">
      <Banner titlePicture={titlePicture} title={""} />
      <Dropdown title={"Fiabilité"} size="large" />
      <Dropdown title={"Respect"} size="large" />
      <Dropdown title={"Service"} size="large" />
      <Dropdown title={"Sécurité"} size="large" />
      <Dropdown title={"Fiabilité"} size="small" />
      <Dropdown title={"Respect"} size="small" />
      <Dropdown title={"Service"} size="small" />
      <Dropdown title={"Sécurité"} size="small" />
    </div>
  );
}

export default Apropos;

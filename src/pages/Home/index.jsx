import { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import "./index.scss";
import titlePicture from "../../assets/images/Image source 1.png";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data/MockedData.json");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Could not fetch data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <div className="home-title-container">
        <img src={titlePicture} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Cards data={data} />
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import "./index.scss";

import titlePicture from "../../assets/images/Image source 1.png";

import Banner from "../../components/Banner";

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
    <main className="home-container">
      <Banner
        titlePicture={titlePicture}
        title="Chez vous, partout et ailleurs"
      />
      <Cards data={data} />
    </main>
  );
}

export default Home;

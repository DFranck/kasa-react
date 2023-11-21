import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../../data/MockedData.json");
      setData(response);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

export default Home;

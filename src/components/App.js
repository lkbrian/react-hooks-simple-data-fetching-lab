// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  const API_URL = "https://dog.ceo/api/breeds/image/random";
  const [pending, setPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPending(false);
        setData(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
        setPending(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {pending ? (
        <p>loading...</p>
      ) : (
        <img src={data} alt="A Random Dog" />
      )}
    </>
  );
};

export default App;

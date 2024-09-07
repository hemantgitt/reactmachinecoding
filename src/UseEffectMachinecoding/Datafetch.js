import React, { useState, useEffect } from "react";

const Datafetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network respose is not okay");
      const datas = await response.json();
      setData(datas);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();

    const intervalId = setInterval(getData, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };  
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div>
      <ul>
        {data.map((dt) => (
          <li key={dt.id}>{dt.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Datafetch;

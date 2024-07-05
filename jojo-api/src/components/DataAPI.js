import { useState, useEffect } from "react";
import Card from "./Card/Card.jsx";
function DataAPI() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://stand-by-me.herokuapp.com/api/v1/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <Card characters={characters} />;
    </>
  );
}

export default DataAPI;

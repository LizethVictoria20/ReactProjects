import { useState, useEffect } from "react";
// import Card from "./Card";

function RenderAPI() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://stand-by-me.herokuapp.com/api/v1/characters")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error(`Hubo un error ${error}`);
      });
  }, []);

  return <>{console.log(characters)}</>;
}

export default RenderAPI;
//https://stand-by-me.herokuapp.com/api/v1/characters
//https://jojos-bizarre-api.netlify.app/assets/jonathan.webp

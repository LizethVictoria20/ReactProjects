import { useState, useEffect } from "react";

function RenderAPI(url) {
  const [characters, setCharacters] = useState([]);
  const fetchApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
      })
      .catch((error) => {
        console.error(`Hubo un error ${error}`);
      });
  };

  useEffect(() => {
    fetchApi();
  });
  return { characters, RenderAPI };
}

export default RenderAPI;
//https://stand-by-me.herokuapp.com/api/v1/characters
//https://jojos-bizarre-api.netlify.app/assets/jonathan.webp

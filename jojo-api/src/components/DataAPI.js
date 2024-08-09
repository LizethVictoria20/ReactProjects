import { useState, useEffect } from "react";
import Card from "./Card/Card.jsx";
import '../App.css'
function DataAPI() {
  const [characters, setCharacters] = useState([]);
  const [ filter, setFilter ] = useState([]);


  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filterSearch = characters.filter((data) => 
      data.name.toLowerCase().includes(value)
    );
    setFilter(filterSearch);
  }

  useEffect(() => {
    fetch("https://stand-by-me.herokuapp.com/api/v1/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setFilter(data);
      });
  }, []);
  return (
    <>
    <div className="container-filter">
      <input type="search" onChange={handleSearch} className="filter-character" />
    </div>
      <Card characters={filter} />;
    </>
  );
}

export default DataAPI;

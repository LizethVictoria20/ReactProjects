import "./style-search.css";
import { useState, useEffect } from "react";

function SearchBar({ search }) {
  const [character, setCharacter] = useState();
  const [searchs, setSearch] = useState("");

  useEffect(() => {
    if (!search || search.length === 0) {
      console.log("Sin datos aún");
    } else {
      // console.log(search);
      const filter = search.filter(
        (valueFilter) => search.map((value) => console.log(valueFilter))
        // !value.name.toLowerCase().includes(character.toLowerCase()) &&
        // !value.house.toLowerCase().includes(character.toLowerCase())
      );

      console.log(filter);
    }
  }, [search]);

  const handleEvent = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search-character">
        <form action="">
          <input type="search" placeholder="Search..." onChange={handleEvent} />
        </form>
      </div>
    </>
  );
}

export default SearchBar;

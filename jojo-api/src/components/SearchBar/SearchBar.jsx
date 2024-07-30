import "./style-search.css";
import { useState, useEffect } from "react";

function SearchBar({ characters }) {
  const [searchs, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    if (Array.isArray(characters) && characters.length > 0) {
      setFilteredCharacters(characters);
      const FilteredPlayers = characters.filter ((data) => {

        if (data.name.toUpperCase( ).includes (searchs.toUpperCase( ))) {
          return true;
        }
        return false;
         
        });
        console.log(FilteredPlayers)

    } else {
      setFilteredCharacters([]);
    }
  }, [characters]);

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(searchs);
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search-character">
        <form action="">
          <input
            type="search"
            placeholder="Search..."
            onChange={handleEvent}
            value={searchs}
          />
        </form>
      </div>
    </>
  );
}

export default SearchBar;

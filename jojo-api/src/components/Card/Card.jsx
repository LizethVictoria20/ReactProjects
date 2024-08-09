import "./style-card.css";
import { Link } from "react-router-dom";

function Card({ characters }) {
  const urlImg = "https://jojos-bizarre-api.netlify.app/assets/";

  if (characters.length > 0) {
    return (
      <>
        <div className="container">
          {characters.map((character) => {
            return (
              <Link to={character.id} key={character.id}>
                <div className="card">
                  <h1 className="character-name">{character.name}</h1>
                  <p>{character.japaneseName}</p>
                  <img src={`${urlImg}${character.image}`} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}
export default Card;

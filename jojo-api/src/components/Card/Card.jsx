import "./style-card.css";

function Card({ characters }) {
  const urlImg = "https://jojos-bizarre-api.netlify.app/assets/";

  if (characters.length > 0) {
    return (
      <div className="container">
        {characters.map((character) => {
          return (
            <div key={character.id} className="card">
              <h1 className="character-name">{character.name}</h1>
              <p>{character.japaneseName}</p>
              <img src={`${urlImg}${character.image}`} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Card;

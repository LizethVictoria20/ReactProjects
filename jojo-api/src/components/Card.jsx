import RenderAPI from './RenderAPI.jsx';
import './style-card.css'

function Card() {
    const { characters } = RenderAPI("https://stand-by-me.herokuapp.com/api/v1/characters")
    const images = 'https://jojos-bizarre-api.netlify.app/assets/'
    return (
        <div className='container'>
            {characters.map((character) => 
                <div key={character.id} className='card'>
            <h3 className='character-name'>{character.name}</h3>
            <p>{character.japaneseName}</p>
            <img src={images + character.image} alt="" />
        </div>)}
        </div>
    )
  
}

export default Card
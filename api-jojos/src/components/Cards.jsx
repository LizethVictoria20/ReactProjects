import { RenderAPI } from './apiFetch.jsx';
import '../styles/cards.css';

export function Cards(){
    const { character } = RenderAPI('https://stand-by-me.herokuapp.com/api/v1/characters');
    const urlImg = 'https://jojos-bizarre-api.netlify.app/assets/'
    return (
      <div className='container'>

        {character?.map((data) => 
        <div key={data.id} className='card'>
            <h3 className='character-name'>{data.name}</h3>
            <p>{data.japaneseName}</p>
            <img src={urlImg + data.image} alt='Imagen personaje'/>
        </div>)}
      </div>
  
    )
    
}

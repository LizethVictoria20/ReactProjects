import { RenderAPI } from './apiFetch.jsx';
import '../styles/cards.css';

export function Cards(){
    const { character, setCharacter } = RenderAPI('https://stand-by-me.herokuapp.com/api/v1/characters');
  
    return (
      <div className='container'>
        {character?.map((data) => 
        <div key={data.id}>
            <h1 className='character-name'>{data.name}</h1>
        </div>)}
      </div>
  
    )
    
}

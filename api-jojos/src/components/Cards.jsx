import { RenderAPI } from './apiFetch.jsx';
import '../styles/cards.css';

export function Cards(){
    const { character } = RenderAPI('https://stand-by-me.herokuapp.com/api/v1/characters');
  
    return (
      <div className='container'>

        {character?.map((data) => 
        <div key={data.id} className='card'>
            <p className='character-name'>{data.name}</p>
        </div>)}
      </div>
  
    )
    
}

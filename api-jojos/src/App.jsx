import { RenderAPI } from './components/apiFetch.jsx';


function App() {
  const { character, setCharacter } = RenderAPI('https://stand-by-me.herokuapp.com/api/v1/characters');
  
  return (
    <div>
      {character?.map((data) => <div key={data.id}>{data.name}</div>)}
    </div>

  )
  
}

export default App;

//https://stand-by-me.herokuapp.com/api/v1/characters
//https://jojos-bizarre-api.netlify.app/assets/jonathan.webp
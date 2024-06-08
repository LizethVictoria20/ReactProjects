import RenderAPI from './components/apiFetch.jsx';
import  { Container } from "./components/Container.jsx";

function App() {
  fetch('https://stand-by-me.herokuapp.com/api/v1/characters')
  .then((res) => res.json())
  .then((data) => {
      <div className="App" id="app">
      <Container name={data.name}/>
      </div>
  })
  return (
    console.log('holi')
  );
}

export default App;

//https://stand-by-me.herokuapp.com/api/v1/characters
//https://jojos-bizarre-api.netlify.app/assets/jonathan.webp
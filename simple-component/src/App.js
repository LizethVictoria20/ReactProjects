import { FetchData } from './components/useFetch.jsx';
import { Character } from './components/characters.jsx';


function App() {
  return (
    <div className="App" id='App'>
      <FetchData/>
      <Character/>
    </div>
  );
}

export default App;

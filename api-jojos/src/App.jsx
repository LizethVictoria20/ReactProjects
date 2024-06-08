import { Cards } from './components/Cards.jsx';
import Logo from '../src/images/JojosLogo.png'


function App() {
  return (
    <div className='container-app'>
    <div className='Logo'>
      <img src={Logo} alt='Logo jojos'/>
      </div>
      <Cards />
    </div>
  )

}

export default App;

//https://stand-by-me.herokuapp.com/api/v1/characters
//https://jojos-bizarre-api.netlify.app/assets/jonathan.webp
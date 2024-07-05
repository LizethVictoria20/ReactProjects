import './style-detail.css'
import { IoIosReturnLeft } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

function Detail() {
  const { characterID } = useParams();
  const [character, setCharacter] = useState()
  const data = `https://stand-by-me.herokuapp.com/api/v1/characters/${characterID}`;
  const urlImg = "https://jojos-bizarre-api.netlify.app/assets/";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(data)
    .then((data) => data.json())
    .then((data) => setCharacter(data)
    )
  }, [])

  const returnAllCharacter = () => {
    navigate('/')
  }

  return (
    <div className="container-character">
      {
        character && (
          <>
            <div className="container-info">
              <h1>{character.name}</h1>
              <p>{character.japaneseName}</p>
              <p><strong> Abilities:</strong><br/> {character.abilities}</p>
              <p><strong> Nationality:</strong><br/>{character.nationality}</p>
              <p><strong> Catchphrase:</strong><br/>{character.catchphrase}</p>
              <p><strong> Family:</strong><br/>{character.family}</p>
              <p><strong> Living: </strong>
              <span className={character.living ? "true" : "false"}>
                {character.living ? 'Yes' : 'No'}
              </span>
            </p>
            <p><strong> isHuman: </strong>
              <span className={character.isHuman ? 'true' : 'false'}>
                {character.isHuman ? 'Yes' : 'No'}
              </span>
            </p>
              
              <IoIosReturnLeft onClick={returnAllCharacter} style={{cursor: "pointer"}} fontSize="1.9em"/>
            </div>

            <div>
              <img className="img-characters" src={`${urlImg}${character.image}`} alt="" />
            </div>
          </>
        )
      }
    </div>
  )
  
}


export default Detail;

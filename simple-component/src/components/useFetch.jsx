import '../App.css'
import { Character } from './characters.jsx'

export function FetchData() {
    fetch('https://stand-by-me.herokuapp.com/api/v1/characters')
    .then(res => {
        return res.json()
    })
    .then(data => {
        // eslint-disable-next-line array-callback-return
        data.map((character) => {
            <Character text={character.name} />
            
        })



    }, [])

}



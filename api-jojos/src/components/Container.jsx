import { React } from "react";


export function Container({name, abilities}){
    return (
        <div>
            <h1>{name}</h1>
            <p>{abilities}</p>
        </div>
    )
}

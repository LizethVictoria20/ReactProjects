import { React } from "react";
import { useState } from 'react';

export function RenderAPI(url) {
    const [ character, setCharacter] = useState([]);
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        setCharacter(res);
    }, []);
    return { character, RenderAPI };
}


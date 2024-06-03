import React from 'react';
import '../styles/Button.css';

export function Button(props) {
    return (
      <button onClick={() => props.agregarNum(props.children)}>{props.children}</button>
    );
}
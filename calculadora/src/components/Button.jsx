import React from 'react';
import '../styles/Button.css';

export function Button(props) {
    return (
      <button>{props.children}</button>
    );
}
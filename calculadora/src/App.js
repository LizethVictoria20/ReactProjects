import React from 'react'
import './App.css';


import { Button } from "./components/Button.jsx";

function App() {
  return (
    <div className="container">
      <div className='rows'>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </div>
      <div className='rows'>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </div>
      <div className='rows'>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
      </div>
      <div className='rows'>
        <Button>=</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>/</Button>
      </div>

    </div>
  );
}

export default App;

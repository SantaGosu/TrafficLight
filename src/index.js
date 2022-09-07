import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';

function TrafficLight() {
  const [ color, setColor] = useState("yellow");
  return (
    <div className='trafficLight'>
      <button className='circle1' onClick={() => setColor(color)}></button>
      <button className='circle2' onClick={() => setColor(color)}></button>
      <button className='circle3' onClick={() => setColor(color)}></button>
    </div>
  );
}
ReactDOM.render(<TrafficLight />, document.getElementById("root"));
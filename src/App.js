import React from 'react';
import './index.css';
import { useState } from 'react';

function TrafficLight() {
  const [ color, setColor] = useState("red");
  return (
    <div className='trafficLight'>
      <div style={{color}}>hi</div>
    </div>
  );
}

export default TrafficLight;

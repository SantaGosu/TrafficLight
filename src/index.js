import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Light from './light';

function TrafficLight() {
  const colors = ["red", "yellow", "green"]
  return ( 
    <div className="trafficLight">
      {colors.map((color) => {
        return <Light color={color}/>;
      })}
    </div>
  );
}
ReactDOM.render(<TrafficLight />, document.getElementById("root"));
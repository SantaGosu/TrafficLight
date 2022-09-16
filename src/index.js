import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function TrafficLight() {
  
  const [litUp, setLitUp] = useState("red");

  return ( 
    <div className="trafficLight">
      <div className={"light red" + ((litUp === "red") ? " glow": "")}></div>
      <div className={"light yellow" + ((litUp === "yellow") ? " glow": "")}></div>
      <div className={"light green" + ((litUp === "green") ? " glow": "")}></div>
    </div>
  );
}
ReactDOM.render(<TrafficLight />, document.getElementById("root"));
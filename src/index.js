import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function TrafficLight() {
  
  const [litUp, setLitUp] = useState("");

  return ( 
    <div className="trafficLight">
      <div onClick={() => setLitUp("red")}
      className={"light red" + ((litUp === "red") ? " glow": "")}></div>
      <div onClick={() => setLitUp("yellow")}
      className={"light yellow" + ((litUp === "yellow") ? " glow": "")}></div>
      <div onClick={() => setLitUp("green")}
      className={"light green" + ((litUp === "green") ? " glow": "")}></div>
    </div>
  );
}
ReactDOM.render(<TrafficLight />, document.getElementById("root"));
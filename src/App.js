import React from "react";
import "./App.css";
import Temperature from "./Temperature";


export default function App() {
  return (
    <div className="App">
      <div className="weather">
        <Temperature defaultCity = "Los Angeles" />
      </div>
      <small>
        <a href="https://github.com/audreyfranco/weather-react">Open-source code </a>
    by Audrey Franco
      </small>
    </div>
  );
}

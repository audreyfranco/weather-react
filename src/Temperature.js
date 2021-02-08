import React from "react";
import "./App.css";

export default function Temperature() {
  return (
    <div className="col-6">
      <div className="current">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Icon"
          id="icon"
          className="float-left"
        />
        <span className="temperature" id="temperature">
          27
        </span>
        <span className="units">
          <a href="#" id="celsius-link" className="active">
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
      <div className="details">
        <ul>
          <li id="description">Clear</li>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}

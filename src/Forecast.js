import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <hr />
      <div className="row weather-forecast" id="forecast">
        <div className="col-2">
          <h3>15:00</h3>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <div className="weather-forecast-temperautre">
            <strong>27°</strong>
            26°
          </div>
        </div>
        <div className="col-2">
          <h3>18:00</h3>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <div className="weather-forecast-temperautre">
            <strong>27°</strong>
            26°
          </div>
        </div>
        <div className="col-2">
          <h3>21:00</h3>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <div className="weather-forecast-temperautre">
            <strong>27°</strong>
            26°
          </div>
        </div>
        <div className="col-2">
          <h3>00:00</h3>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <div className="weather-forecast-temperautre">
            <strong>27°</strong>
            26°
          </div>
        </div>
        <div className="col-2">
          <h3>03:00</h3>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <div className="weather-forecast-temperautre">
            <strong>27°</strong>
            26°
          </div>
        </div>
      </div>
    </div>
  );
}

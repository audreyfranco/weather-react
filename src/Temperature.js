import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./App.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
function handleResponse(response) {
setWeatherData({
  ready: true,
  weather: response.data.main.temp,
  humidity: response.data.main.humidity,
  date: new Date(response.data.dt*1000),
  description: response.data.weather[0].description,
  iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
  wind: response.data.wind.speed,
  city: response.data.name
});

}
if (weatherData.ready) {
  return (
    <div className="row">
    <div className="col-6">
            <h1 id="city">{weatherData.city}</h1>
            <h2>
              <FormattedDate date={weatherData.date} />
            </h2>
          </div>
    <div className="col-6">
      <div className="current">
        <img
          src={weatherData.iconUrl}
          alt={weatherData}
          id="icon"
          className="float-left"
        />
        <span className="temperature" id="temperature">
          {Math.round(weatherData.weather)}
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
          <li id="description" className="text-capitalized">{weatherData.description}</li>
          <li>
            Humidity: <span id="humidity">{weatherData.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{weatherData.wind}</span>km/h
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
} else {
  const apiKey = "8402b695ede9a6c63a7ea98262105a24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading...";
}
}


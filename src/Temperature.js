import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

function search() {
  const apiKey = "8402b695ede9a6c63a7ea98262105a24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
 event.preventDefault();
 search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}


if (weatherData.ready) {
  return (
    <div>
      <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="🔍 Search city"
          id="search-text-input"
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" class="btn btn-outline-dark" />
        <input
          type="submit"
          value="Current Location"
          class="btn btn-outline-dark"
          id="current-location-button"
        />
      </form>
      <WeatherInfo data={weatherData} />
    </div>
    </div>
  );
} else {
  search();
  return "loading...";
}
}


import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
    <div className="row">
    <div className="col-6">
            <h1 id="city">{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
          </div>
    <div className="col-6">
      <div className="current">
        <img
          src={props.data.iconUrl}
          alt={props.data}
          id="icon"
          className="float-left"
        />
        <WeatherTemperature celcius={props.data.weather} />
      </div>
      <div className="details">
        <ul>
          <li id="description" className="text-capitalized">{props.data.description}</li>
          <li>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{props.data.wind}</span>km/h
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

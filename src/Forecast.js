import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";



export default function Forecast(props) {
  const [loaded, setloaded] = useState(false);
  const [forecast, setForecast] = useState(null);

function handleForecastResponse(response) {
  setForecast(response.data)
  setloaded(true);
  ;
}

if (loaded && props.city === forecast.city.name) {
  
  return (
    <div className="WeatherForecast row">
      <hr />
      
        <WeatherForecastPreview  data={forecast.list[0]} />
        <WeatherForecastPreview  data={forecast.list[1]} />
        <WeatherForecastPreview  data={forecast.list[2]} />
        <WeatherForecastPreview  data={forecast.list[3]} />
        <WeatherForecastPreview  data={forecast.list[4]} />
        <WeatherForecastPreview  data={forecast.list[5]} />
      
    </div>
  );
} else {
  let apiKey = "8402b695ede9a6c63a7ea98262105a24";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecastResponse);
  return null;
}

  
}

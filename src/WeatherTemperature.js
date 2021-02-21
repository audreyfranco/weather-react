import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celcius");
    function showFahrenheit(event) {
      event.preventDefault();
      setUnit("fahrenheit");  
    }

    function showCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    if(unit === "celcius") {
    return (
        <div className="WeatherTemperature">
            <span className="temperature" id="temperature">
          {Math.round(props.celcius)}
        </span>
        <span className="units">
            °C
          |
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </span>
        </div>
    ); 
    } else {
        let fahrenheit = (props.celcius * 9/5) + 32;
        return (
            <div className="WeatherTemperature">
            <span className="temperature" id="temperature">
          {Math.round(fahrenheit)}
        </span>
        <span className="units">
        <a href="/" id="celcius-link" onClick={showCelcius}>
            °C
        </a>{" "}
          |°F
        </span>
        </div>
        );
    }
}
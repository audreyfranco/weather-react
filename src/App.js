import React from "react";
import "./App.css";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="weather">
        <Search />
        <div className="Row">
          <div className="col-6">
            <h1 id="city">Los Angeles</h1>
            <h2>Sunday, January 17, 2021 13:30</h2>
          </div>
          <Temperature />
        </div>
        <Forecast />
      </div>
    </div>
  );
}

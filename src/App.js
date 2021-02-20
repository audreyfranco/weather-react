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
        <Temperature defaultCity = "Los Angeles" />
        <Forecast />
      </div>
    </div>
  );
}

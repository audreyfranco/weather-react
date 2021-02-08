import React from "react";
import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="text"
          placeholder="🔍 Search city"
          id="search-text-input"
        />
        <input type="submit" value="Search" class="btn btn-outline-dark" />
        <input
          type="submit"
          value="Current Location"
          class="btn btn-outline-dark"
          id="current-location-button"
        />
      </form>
    </div>
  );
}

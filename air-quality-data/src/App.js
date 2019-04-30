import React from "react";
import Map from "././components/Map";
import LineChart from "./components/LineChart";
import "./index.css";
import Colophon from "./components/Colophon";


function App() {
  return (
    <div id="main-container">
      <menu></menu>
      <h1>Air Quality and Car Ownership</h1>
      <Map />
      <LineChart />
      <Colophon />
    </div>
  );
}

export default App;

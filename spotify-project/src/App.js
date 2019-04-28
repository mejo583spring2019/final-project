/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React from "react";
import "./App.css";
import Top10 from "./components/Top10";
import ChartToppers from "./components/ChartToppers";
import Top100 from "./components/Top100";
import Worldwide from "./components/Worldwide";


function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1 className="Title">Spotify Around The World</h1>
        <h2 className="Year">2017</h2>
        <p>
        </p>
      </div>
      <Worldwide></Worldwide>
      <Top10></Top10>
      <ChartToppers></ChartToppers>
      <Top100></Top100>
    </div>
  );
}

export default App;

/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React from "react";
import "./App.css";
import Top10 from "./components/top10";

function App() {
  return (
    <div className="App">
      <div className="intro">
        <h1 className="Title">Spotify Around The World</h1>
        <h2>2017</h2>
        <p>
        Spotify is a popular music streaming service from Sweden.
        As of February 2019, Spotify has over 207 million users around
        the world, in 60 different countries.
        </p>
      </div>
      <Top10></Top10>
    </div>
  );
}

export default App;

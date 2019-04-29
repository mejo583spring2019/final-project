/* eslint-disable max-len */
/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";
import USTable from "../USTable";
import JPTable from "../JPTable";

import "./styles.css";

class Worldwide extends Component {
  render() {
    return (
      <div id="WorldwideContainer">
        <div id="PadDiv"></div>
        <div id="WorldwideIntroContainer">
          <h1 id="WorldwideTitle">
          Spotify Around The World
          </h1>
          <div id="WorldwideTitleUnderline"></div>
          <p id="WorldwideIntro"> Spotify is used by more
          than <span className="bold">207,000,000 </span>
          music lovers in <span className="bold">60 different countries </span>
          around the world. Here's how 10 of those countries listened
          throughout 2017.
          </p>
        </div>
        <div id="WorldwideContentContainer">
          <div id="CountryPicker">
            <div id="Option1" className="CountryOption">United States</div>
            <div className="CountryOption">France</div>
            <div className="CountryOption">Italy</div>
            <div className="CountryOption">Turkey</div>
            <div className="CountryOption">Germany</div>
            <div className="CountryOption">Japan</div>
            <div className="CountryOption">Brazil</div>
            <div className="CountryOption">Australia</div>
            <div className="CountryOption">Mexico</div>
            <div id="Option10" className="CountryOption">Indonesia</div>
          </div>
          <div id="CountryDisplay">
          </div>
          <div id="CountryData">
            <USTable></USTable>
          </div>
          <div id="PadDiv"></div>
        </div>
      </div>
    );
  }
}

export default Worldwide;

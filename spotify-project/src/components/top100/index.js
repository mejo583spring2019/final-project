/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";
import Top100Table from "../Top100Table";

import "./styles.css";

class Top100 extends Component {
  render() {
    return (
      <div id="Top100Container">
        <h1 id="Top100Title">
          TOP 100
        </h1>
        <div id="Top100TitleUnderline"></div>
        <p id="Top100Intro">
          The chart below lists Spotify's <span id="IntroSpan">top 100 </span>songs of 2017,
          as well as ratings for various audio features.
        </p>
        <p id="Top100Intro">
          For clarification on the meaning of certain audio features, refer to the legend below.
        </p>
        <div id="Top100Legend">
        </div>
        <div id="Top100TableContainer">
          <Top100Table></Top100Table>
        </div>
      </div>
    );
  }
}

export default Top100;

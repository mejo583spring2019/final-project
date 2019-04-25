/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";

import "./styles.css";

class Top100 extends Component {
  render() {
    return (
      <div className="Top100Container">
        <p id="Top100Intro">
          These are the <span id="IntroSpan">Top 10 Worldwide </span>
          songs of 2017. Click on a song to learn more!
        </p>
      </div>
    );
  }
}

export default Top100;

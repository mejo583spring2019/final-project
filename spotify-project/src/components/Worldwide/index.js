/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";

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
            <table id="CDTable">
              <tr>
                <th class="CDHeader">Chart Position</th>
                <th class="CDHeader">January 2017</th>
                <th class="CDHeader">February 2017</th>
                <th class="CDHeader">March 2017</th>
                <th class="CDHeader">April 2017</th>
                <th class="CDHeader">May 2017</th>
                <th class="CDHeader">June 2017</th>
                <th class="CDHeader">July 2017</th>
                <th class="CDHeader">August 2017</th>
                <th class="CDHeader">September 2017</th>
                <th class="CDHeader">October 2017</th>
                <th class="CDHeader">November 2017</th>
                <th class="CDHeader">December 2017</th>
                <th class="CDHeader">January 2018</th>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">1</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">2</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">3</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">4</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">5</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">6</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">7</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">8</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">9</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
              <tr className="CDRow">
                <td className="CDDatum PositionCol">10</td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
                <td className="CDDatum"></td>
              </tr>
            </table>
          </div>
          <div id="PadDiv"></div>
        </div>
      </div>
    );
  }
}

export default Worldwide;

/* eslint-disable max-len */
/* eslint-disable require-jsdoc */ /* REMOVE LATER */
import React, { Component } from "react";
import USTable from "../USTable";
import JPTable from "../JPTable";
import DETable from "../DETable";
import BRTable from "../BRTable";

import "./styles.css";

class Worldwide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUS: false,
      showDE: false,
      showJP: false,
      showBR: false,
    };

    this.toggleUS = this.toggleUS.bind(this);
    this.toggleDE = this.toggleDE.bind(this);
    this.toggleJP = this.toggleJP.bind(this);
    this.toggleBR = this.toggleBR.bind(this);
  }

  toggleUS() {
    this.setState({ showDE: false });
    this.setState({ showJP: false });
    this.setState({ showBR: false });
    const { showUS } = this.state;
    this.setState({ showUS: !showUS });
  }

  toggleDE() {
    this.setState({ showUS: false });
    this.setState({ showJP: false });
    this.setState({ showBR: false });
    const { showDE } = this.state;
    this.setState({ showDE: !showDE });
  }

  toggleJP() {
    this.setState({ showUS: false });
    this.setState({ showDE: false });
    this.setState({ showBR: false });
    const { showJP } = this.state;
    this.setState({ showJP: !showJP });
  }

  toggleBR() {
    this.setState({ showUS: false });
    this.setState({ showDE: false });
    this.setState({ showJP: false });
    const { showBR } = this.state;
    this.setState({ showBR: !showBR });
  }


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
          around the world. Here's how 4 of those countries listened
          throughout 2017.
          </p>
        </div>
        <div id="WorldwideContentContainer">
          <div id="CountryPicker">
            <button id="FCO" className="CountryOption" onClick={ this.toggleUS }>United States</button>
            <button className="CountryOption" onClick={ this.toggleDE }>Germany</button>
            <button className="CountryOption" onClick={ this.toggleJP }>Japan</button>
            <button id="LCO" className="CountryOption" onClick={ this.toggleBR }>Brazil</button>
          </div>
          <div id="CountryDisplay">
          </div>
          <div id="CountryData">
            { this.state.showUS && <USTable></USTable> }
            { this.state.showDE && <DETable></DETable> }
            { this.state.showJP && <JPTable></JPTable> }
            { this.state.showBR && <BRTable></BRTable> }
          </div>
        </div>
      </div>
    );
  }
}

export default Worldwide;

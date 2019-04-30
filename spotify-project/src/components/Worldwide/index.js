import React, { Component } from "react";
import DefaultSVG from "./DefaultSVG/svg";
import USSVG from "./USSVG/svg";
import DESVG from "./DESVG/svg";
import BRSVG from "./BRSVG/svg";
import JPSVG from "./JPSVG/svg";
import IDSVG from "./IDSVG/svg";
import USTable from "../USTable";
import JPTable from "../JPTable";
import DETable from "../DETable";
import BRTable from "../BRTable";
import IDTable from "../IDTable";

import "./styles.css";

/**
 * WorldWide displays data and graphics regarding
 * The top 10 most popular songs over 2017 in various countries
 */
class Worldwide extends Component {
  /**
   * constructor sets up all the states in their default position,
   * with the default SVG showing and others hidden.
   * Toggle commands change the state of countries
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      showDefaultSVG: true,
      showUS: false,
      showDE: false,
      showJP: false,
      showBR: false,
      showID: false,
    };

    this.toggleUS = this.toggleUS.bind(this);
    this.toggleDE = this.toggleDE.bind(this);
    this.toggleJP = this.toggleJP.bind(this);
    this.toggleBR = this.toggleBR.bind(this);
    this.toggleID = this.toggleID.bind(this);
  }

  /**
   * Toggle US turns all other countries off and removes
   * the default SVG before toggling showUS
   *
   */
  toggleUS() {
    this.setState({ showDE: false });
    this.setState({ showJP: false });
    this.setState({ showBR: false });
    this.setState({ showID: false });
    this.setState({ showDefaultSVG: false });
    const { showUS } = this.state;
    this.setState({ showUS: !showUS });
  }

  /**
   * Toggle DE turns all other countries off and removes
   * the default SVG before toggling showDE
   *
   */
  toggleDE() {
    this.setState({ showUS: false });
    this.setState({ showJP: false });
    this.setState({ showBR: false });
    this.setState({ showID: false });
    this.setState({ showDefaultSVG: false });
    const { showDE } = this.state;
    this.setState({ showDE: !showDE });
  }

  /**
   * Toggle JP turns all other countries off and removes
   * the default SVG before toggling showJP
   *
   */
  toggleJP() {
    this.setState({ showUS: false });
    this.setState({ showDE: false });
    this.setState({ showBR: false });
    this.setState({ showID: false });
    this.setState({ showDefaultSVG: false });
    const { showJP } = this.state;
    this.setState({ showJP: !showJP });
  }

  /**
   * Toggle BR turns all other countries off and removes
   * the default SVG before toggling showBR
   *
   */
  toggleBR() {
    this.setState({ showUS: false });
    this.setState({ showDE: false });
    this.setState({ showJP: false });
    this.setState({ showID: false });
    this.setState({ showDefaultSVG: false });
    const { showBR } = this.state;
    this.setState({ showBR: !showBR });
  }

  /**
   * Toggle iD turns all other countries off and removes
   * the default SVG before toggling showID
   *
   */
  toggleID() {
    this.setState({ showUS: false });
    this.setState({ showDE: false });
    this.setState({ showJP: false });
    this.setState({ showBR: false });
    this.setState({ showDefaultSVG: false });
    const { showID } = this.state;
    this.setState({ showID: !showID });
  }

  /**
   * renders worldwide component
   * @return {object} worldwide component
   */
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
          around the world. Here's how 5 of those countries listened
          throughout 2017.
          </p>
        </div>
        <div id="WorldwideContentContainer">
          <div id="CountryPicker">
            <button id="FCO" className="CountryOption"
              onClick={ this.toggleUS }>United States</button>
            <button className="CountryOption"
              onClick={ this.toggleDE }>Germany</button>
            <button className="CountryOption"
              onClick={ this.toggleJP }>Japan</button>
            <button className="CountryOption"
              onClick={ this.toggleBR }>Brazil</button>
            <button id="LCO" className="CountryOption"
              onClick={ this.toggleID }>Indonesia</button>
          </div>
          <div id="CountryDisplay">
            <div className="SVGPad"></div>
            <div id="SVGHolder">
              { this.state.showDefaultSVG && <DefaultSVG></DefaultSVG> }
              { this.state.showUS && <USSVG></USSVG> }
              { this.state.showDE && <DESVG></DESVG> }
              { this.state.showJP && <JPSVG></JPSVG> }
              { this.state.showBR && <BRSVG></BRSVG> }
              { this.state.showID && <IDSVG></IDSVG> }
            </div>
            <div className="SVGPad"></div>
          </div>
          <div id="CountryData">
            { this.state.showUS && <USTable></USTable> }
            { this.state.showDE && <DETable></DETable> }
            { this.state.showJP && <JPTable></JPTable> }
            { this.state.showBR && <BRTable></BRTable> }
            { this.state.showID && <IDTable></IDTable> }
          </div>
        </div>
      </div>
    );
  }
}

export default Worldwide;

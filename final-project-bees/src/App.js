import React, { Component } from "react";

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
// import Table from "./components/Table";
import Section3 from "./components/Section3";
import Chart from "./components/Chart";
import Colophon from "./components/Colophon";
import Flip from "./components/Flippy";


// import Map from "./components/Map";

import "./App.css";

/**
 * param {any}
 */
class App extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div>
        <Header />
        <Section1 />
        <Section2 />
        <Flip />
        <Section3 />
        <Chart />
        <Colophon />

      </div>
    );
  }
}

export default App;

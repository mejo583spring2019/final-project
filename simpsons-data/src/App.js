import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Scroller from "./components/Scroller";
import Colophon from "./components/Colophon";


/** sets up the entire Simpsons app*/
class App extends Component {
  /** renders the scrollmagic sections, chart, and colophon sections
 * @return {div}
*/
  render() {
    return (
      <div>
        <Scroller></Scroller>
        <Chart></Chart>
        <Colophon></Colophon>
      </div>
    );
  }
}

export default App;

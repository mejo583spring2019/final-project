import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Scroller from "./components/Scroller";
import Colophon from "./components/Colophon";


/** this is a JSDOC comment*/
class App extends Component {
  /** this is a JSDOC comment
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

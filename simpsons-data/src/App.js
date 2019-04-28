import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Scroller from "./components/Scroller";


/** this is a JSDOC comment*/
class App extends Component {
  /** this is a JSDOC comment
 * @return {div}
*/
  render() {
    return (
      <div>
        <h2>Simpsons Data</h2>
        <Scroller></Scroller>
        <section className="panel3"><Chart></Chart></section>
      </div>
    );
  }
}

export default App;

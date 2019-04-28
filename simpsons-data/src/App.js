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
        <Scroller></Scroller>
        <section className="panel chart"><Chart></Chart></section>
      </div>
    );
  }
}

export default App;

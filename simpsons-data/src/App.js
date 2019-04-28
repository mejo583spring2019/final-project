import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";


/** this is a JSDOC comment*/
class App extends Component {
  /** this is a JSDOC comment
 * @return {div}
*/
  render() {
    return (
      <div>
        <h2>Simpsons Data</h2>
        <Chart></Chart>

      </div>
    );
  }
}

export default App;

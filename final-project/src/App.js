import React, { Component } from "react";
import Jumbotrons from "./components/layout/jumbotron";
import Nav from "./components/layout/navigation";
import Cards from "./components/elements/card";

import "./app.css";
/** creates the app */
class App extends Component {
  /** constructor takes in props to set state
 * @param {object} props
 */
  constructor() {
    super();
    this.state = {
      chartData: {},
      bubbleData: {},
      barData: {},


    };
  }

  /** Renders the application
   * @return {Object}
   */
  render() {
    return (
      <div className="app">
        <Nav />
        <Jumbotrons />
        <div className="outer">
        </div>

        <div className="outer">

          <Cards />
        </div>


      </div>
    );
  }
}

export default App;

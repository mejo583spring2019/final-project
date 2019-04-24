import React, { Component } from "react";
import "./App.css";

/** App component builds out main part
 * of website.
 */
class App extends Component {
  /**
 * Render the main page.
 * @return {any} JSX element
 */
  render() {
    return (
      <div className="flex">
        <header className="App-header">
          <h1>The Cost of Higher Education</h1>
        </header>
      </div>
    );
  }
}

export default App;

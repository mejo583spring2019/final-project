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
      <div className="flex-column">
        <header className="App-header flex-column">
          <h1>The Cost of Higher Education</h1>
          <img
            src="/img/mortarboard.svg"
            alt="A cartoon of a college mortarboard"
          />
        </header>
        <section className="main flex">
          <img
            src="/img/nc-outline.svg"
            alt="An outline of North Carolina"
          />

        </section>
      </div>
    );
  }
}

export default App;

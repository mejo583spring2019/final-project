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
      <div className="App">
        <header className="App-header">
          <p>
            I'm going to build my awesome final project here, so get ready.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

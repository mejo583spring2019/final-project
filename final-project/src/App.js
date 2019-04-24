import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart/";

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
          <h1>Race to the Finish</h1>
          <h3>A look at how race affects college completion</h3>
          <h4>By Brooke Fisher</h4>
        </header>
        <section className="main flex">
          <p>
            You wanna know more about my project? The look no further than here.
          </p>
          <img
            src="/img/nc-outline.svg"
            alt="An outline of North Carolina"
          />
          <Chart />
        </section>
      </div>
    );
  }
}

export default App;

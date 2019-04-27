import React, { Component } from "react";
import "./App.css";
import WhiteChart from "./components/WhiteChart/";
import BlackChart from "./components/BlackChart";
import AsianChart from "./components/AsianChart";

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
          <h3>A look at how race affects college completion rates</h3>
          <h4>By Brooke Fisher</h4>
        </header>
        <section className="main flex">
          <p>
            Race plays an important factor in undestanding how someone's college
            completion rate can be affected by his or her own's identity.
            According to a <a href="https://nscresearchcenter.org/signaturereport12-supplement-2/" target="_blank" rel="noopener noreferrer">report</a> published by the National Student Clearinghouse Research Center in 2017. This data found that 6-year completion rates of black students were the lowest among all racial groups at 45.9 percent, while Asians had the higest 6-year completion rate at 71.7 percent. The average across 6-year completion rate was 62.4 percent.
          </p>
          <p>
            North Carolina's 6-year completion rates vary dramatically throughout the state. Among several public and private four-year universities, the latest data from the U.S. Department of Education's <a href="https://collegescorecard.ed.gov/" target="_blank" rel="noopener noreferrer">College Scorecard Data</a> has shown vastly different completion rates. Among public four-year universities, <a href="https://unc.edu" target="_blank" rel="noopener noreferrer">UNC-Chapel Hill</a>, the flagship school of the UNC System, had the higest 6-year completion rate at 91.1 percent. Private universities <a href="https://duke.edu" target="_blank" rel="noopener noreferrer">Duke University</a> and <a href="https://davidson.edu" target="_blank" rel="noopener noreferrer">Davidson College</a>, with 6-year completion rates at 94.6 percent and 94.8 percent, respectively.
          </p>
          <img
            src="/img/nc-outline.svg"
            alt="An outline of North Carolina"
          />
          <WhiteChart />
          <BlackChart />
          <AsianChart />
        </section>
      </div>
    );
  }
}

export default App;

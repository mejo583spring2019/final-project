import React, { Component } from "react";
import "./App.css";
import WhiteChart from "./components/WhiteChart/";
import BlackChart from "./components/BlackChart";
import AsianChart from "./components/AsianChart";
import HispanicChart from "./components/HispanicChart";
import AIANChart from "./components/AIANChart";
import ClassToggle from "./components/ClassToggle";

/** App component builds out main part
 * of website.
 */
class App extends Component {
  /** Constructor binds showChart to component
   * @param {any} props
   */
  constructor(props) {
    super(props);

    this.showChart = this.showChart.bind(this);
  }

  /** Takes care of state changes for buttons for charts */
  showChart() {
    const whiteChart = document.getElementById("chart-white");
    const blackChart = document.getElementById("chart-black");
    const asianChart = document.getElementById("chart-asian");
    const hispanicChart = document.getElementById("chart-hispanic");
    const aianChart = document.getElementById("chart-aian");
    const whiteBtn = document.getElementById("sort-white");
    const blackBtn = document.getElementById("sort-black");
    const asianBtn = document.getElementById("sort-asian");
    const hispanicBtn = document.getElementById("sort-hispanic");
    const aianBtn = document.getElementById("sort-aian");

    whiteBtn.onclick = function() {
      whiteChart.classList.toggle("hide");
      if (!whiteBtn.classList.contains("active")) {
        whiteBtn.classList.toggle("active");
      }
      if (blackBtn.classList.contains("active")) {
        blackBtn.classList.toggle("active");
      }
      if (asianBtn.classList.contains("active")) {
        asianBtn.classList.toggle("active");
      }
      if (hispanicBtn.classList.contains("active")) {
        hispanicBtn.classList.toggle("active");
      }
      if (aianBtn.classList.contains("active")) {
        aianBtn.classList.toggle("active");
      }
      if (!blackChart.classList.contains("hide")) {
        blackChart.classList.add("hide");
      }
      if (!asianChart.classList.contains("hide")) {
        asianChart.classList.add("hide");
      }
      if (!hispanicChart.classList.contains("hide")) {
        hispanicChart.classList.add("hide");
      }
      if (!aianChart.classList.contains("hide")) {
        aianChart.classList.add("hide");
      }
    };

    blackBtn.onclick = function() {
      blackChart.classList.toggle("hide");
      if (!blackBtn.classList.contains("active")) {
        blackBtn.classList.toggle("active");
      }
      if (whiteBtn.classList.contains("active")) {
        whiteBtn.classList.toggle("active");
      }
      if (asianBtn.classList.contains("active")) {
        asianBtn.classList.toggle("active");
      }
      if (hispanicBtn.classList.contains("active")) {
        hispanicBtn.classList.toggle("active");
      }
      if (aianBtn.classList.contains("active")) {
        aianBtn.classList.toggle("active");
      }
      if (!aianChart.classList.contains("hide")) {
        aianChart.classList.add("hide");
      }
      if (!whiteChart.classList.contains("hide")) {
        whiteChart.classList.add("hide");
      }
      if (!asianChart.classList.contains("hide")) {
        asianChart.classList.add("hide");
      }
      if (!hispanicChart.classList.contains("hide")) {
        hispanicChart.classList.add("hide");
      }
    };

    asianBtn.onclick = function() {
      asianChart.classList.toggle("hide");
      if (!asianBtn.classList.contains("active")) {
        asianBtn.classList.toggle("active");
      }
      if (aianBtn.classList.contains("active")) {
        aianBtn.classList.toggle("active");
      }
      if (whiteBtn.classList.contains("active")) {
        whiteBtn.classList.toggle("active");
      }
      if (blackBtn.classList.contains("active")) {
        blackBtn.classList.toggle("active");
      }
      if (hispanicBtn.classList.contains("active")) {
        hispanicBtn.classList.toggle("active");
      }
      if (!whiteChart.classList.contains("hide")) {
        whiteChart.classList.add("hide");
      }
      if (!blackChart.classList.contains("hide")) {
        blackChart.classList.add("hide");
      }
      if (!hispanicChart.classList.contains("hide")) {
        hispanicChart.classList.add("hide");
      }
      if (!aianChart.classList.contains("hide")) {
        aianChart.classList.add("hide");
      }
    };

    hispanicBtn.onclick = function() {
      hispanicChart.classList.toggle("hide");
      if (!hispanicBtn.classList.contains("active")) {
        hispanicBtn.classList.toggle("active");
      }
      if (whiteBtn.classList.contains("active")) {
        whiteBtn.classList.toggle("active");
      }
      if (blackBtn.classList.contains("active")) {
        blackBtn.classList.toggle("active");
      }
      if (asianBtn.classList.contains("active")) {
        asianBtn.classList.toggle("active");
      }
      if (aianBtn.classList.contains("active")) {
        aianBtn.classList.toggle("active");
      }
      if (!whiteChart.classList.contains("hide")) {
        whiteChart.classList.add("hide");
      }
      if (!blackChart.classList.contains("hide")) {
        blackChart.classList.add("hide");
      }
      if (!asianChart.classList.contains("hide")) {
        asianChart.classList.add("hide");
      }
      if (!aianChart.classList.contains("hide")) {
        aianChart.classList.add("hide");
      }
    };

    aianBtn.onclick = function() {
      aianChart.classList.toggle("hide");
      if (!aianBtn.classList.contains("active")) {
        aianBtn.classList.toggle("active");
      }
      if (whiteBtn.classList.contains("active")) {
        whiteBtn.classList.toggle("active");
      }
      if (blackBtn.classList.contains("active")) {
        blackBtn.classList.toggle("active");
      }
      if (asianBtn.classList.contains("active")) {
        asianBtn.classList.toggle("active");
      }
      if (hispanicBtn.classList.contains("active")) {
        hispanicBtn.classList.toggle("active");
      }
      if (!whiteChart.classList.contains("hide")) {
        whiteChart.classList.add("hide");
      }
      if (!blackChart.classList.contains("hide")) {
        blackChart.classList.add("hide");
      }
      if (!asianChart.classList.contains("hide")) {
        asianChart.classList.add("hide");
      }
      if (!hispanicChart.classList.contains("hide")) {
        hispanicChart.classList.add("hide");
      }
    };
  }

  /** Calls showChart when the component is mounted */
  componentDidMount() {
    this.showChart();
  }
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
            <a href="#colophon">Colophon</a>
          </p>
          <p>
            Race plays an important factor in undestanding how someone's college
            completion rate can be affected by his or her own's identity.
            According to a <a href="https://nscresearchcenter.org/signaturereport12-supplement-2/" target="_blank" rel="noopener noreferrer">report</a> published by the National Student Clearinghouse Research Center in 2017. This data found that 6-year completion rates of black students were the lowest among all racial groups at 45.9 percent, while Asians had the higest 6-year completion rate at 71.7 percent. The average across 6-year completion rate was 62.4 percent.
          </p>
          <p>
            North Carolina's 6-year completion rates vary dramatically throughout the state. Among several public and private four-year universities, the latest data from the U.S. Department of Education's <a href="https://collegescorecard.ed.gov/" target="_blank" rel="noopener noreferrer">College Scorecard Data</a> has shown vastly different completion rates. Among public four-year universities, <a href="https://unc.edu" target="_blank" rel="noopener noreferrer">UNC-Chapel Hill</a>, the flagship school of the UNC System, had the higest 6-year completion rate at 91.1 percent. Private universities <a href="https://duke.edu" target="_blank" rel="noopener noreferrer">Duke University</a> and <a href="https://davidson.edu" target="_blank" rel="noopener noreferrer">Davidson College</a>, with 6-year completion rates at 94.6 percent and 94.8 percent, respectively.
          </p>
        </section>
        <ClassToggle />
        <section class="results flex">
          <div className="sort">
            <h2>View completion rate by Race</h2>
            <div className="sort__btns flex">
              <div id="sort-white" class="active">White</div>
              <div id="sort-black">Black</div>
              <div id="sort-asian">Asian</div>
              <div id="sort-hispanic">Latinx</div>
              <div id="sort-aian">American Indian/Alaskan Native</div>
            </div>
          </div>
          <div className="chart-container flex">
            <div className="chart__column" id="chart-white"><WhiteChart /></div>
            <div
              className="chart__column hide" id="chart-black"
            >
              <BlackChart />
            </div>
            <div
              className="chart__column hide" id="chart-asian"
            >
              <AsianChart />
            </div>
            <div
              className="chart__column hide" id="chart-hispanic"
            >
              <HispanicChart />
            </div>
            <div
              className="chart__column hide" id="chart-aian"
            >
              <AIANChart />
            </div>
          </div>
          <h2>Results</h2>
          <p>
            Looking at the data from the College Scorecard,
            race does not seem to affect graduation rates significantly
            if students attend the same school. Instead, graduation
            rates seem to vary significantly <em>between</em> schools,
            with schools considered more elite having higher graduation rates
            overall. Thus, race does not seem to be statistically significant
            in determining graduation rates intraschool but interschool.
          </p>
          <p>
            It should also be noted that historically black colleges and
            universities (HBCUs) do not seem to dramatically increase graduation
            rates among minorities. In the data, North Carolina A & T
            had a much lower graduation compared to predominately-white
            institutions.
          </p>
        </section>
        <section id="colophon" class="flex-column">
          <h2>Colophon</h2>
          <h4>Website Creation and Hosting</h4>
          <p>
            This website was created using <a href="https://reactjs.org/">
              React
            </a> and <a href="https://nodejs.org/en/">
              Node</a>.
          </p>
          <p>It is hosted on <a href="https://pages.github.com/">GitHub pages</a></p>
          <h4>Colophon Section 2</h4>
          <p>
            This is the colophon section one where
            I talk about things blah blah blah blah.
          </p>
          <h4>Colophon Section 3</h4>
          <p>
            This is the colophon section one where
            I talk about things blah blah blah blah.
          </p>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import WhiteChart from "./components/WhiteChart/";
import BlackChart from "./components/BlackChart";
import AsianChart from "./components/AsianChart";
import HispanicChart from "./components/HispanicChart";
import AIANChart from "./components/AIANChart";
import NHPIChart from "./components/NHPIChart";
import MixedChart from "./components/MixedChart";
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
    const nhpiChart = document.getElementById("chart-nhpi");
    const mixedChart = document.getElementById("chart-mixed");

    const whiteBtn = document.getElementById("sort-white");
    const blackBtn = document.getElementById("sort-black");
    const asianBtn = document.getElementById("sort-asian");
    const hispanicBtn = document.getElementById("sort-hispanic");
    const aianBtn = document.getElementById("sort-aian");
    const nhpiBtn = document.getElementById("sort-nhpi");
    const mixedBtn = document.getElementById("sort-mixed");

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
      if (nhpiBtn.classList.contains("active")) {
        nhpiBtn.classList.toggle("active");
      }
      if (mixedBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
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
      if (!nhpiChart.classList.contains("hide")) {
        nhpiChart.classList.add("hide");
      }
      if (!mixedChart.classList.contains("hide")) {
        mixedChart.classList.add("hide");
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
      if (mixedBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
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
      if (!nhpiChart.classList.contains("hide")) {
        nhpiChart.classList.add("hide");
      }
      if (!mixedChart.classList.contains("hide")) {
        mixedChart.classList.add("hide");
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
      if (nhpiBtn.classList.contains("active")) {
        nhpiBtn.classList.toggle("active");
      }
      if (mixedBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
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
      if (!nhpiChart.classList.contains("hide")) {
        nhpiChart.classList.add("hide");
      }
      if (!mixedChart.classList.contains("hide")) {
        mixedChart.classList.add("hide");
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
      if (nhpiBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
      }
      if (mixedBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
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
      if (!nhpiChart.classList.contains("hide")) {
        nhpiChart.classList.add("hide");
      }
      if (!mixedChart.classList.contains("hide")) {
        mixedChart.classList.add("hide");
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
      if (nhpiBtn.classList.contains("active")) {
        nhpiBtn.classList.toggle("active");
      }
      if (mixedBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
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
      if (!nhpiChart.classList.contains("hide")) {
        nhpiChart.classList.add("hide");
      }
      if (!mixedChart.classList.contains("hide")) {
        mixedChart.classList.add("hide");
      }
    };

    nhpiBtn.onclick = function() {
      nhpiChart.classList.toggle("hide");
      if (!nhpiBtn.classList.contains("active")) {
        nhpiBtn.classList.toggle("active");
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
      if (!hispanicChart.classList.contains("hide")) {
        hispanicChart.classList.add("hide");
      }
      if (!aianChart.classList.contains("hide")) {
        aianChart.classList.add("hide");
      }
      if (!mixedChart.classList.contains("hide")) {
        mixedChart.classList.add("hide");
      }
    };

    mixedBtn.onclick = function() {
      mixedChart.classList.toggle("hide");
      if (!mixedBtn.classList.contains("active")) {
        mixedBtn.classList.toggle("active");
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
      if (aianBtn.classList.contains("active")) {
        aianBtn.classList.toggle("active");
      }
      if (nhpiBtn.classList.contains("active")) {
        nhpiBtn.classList.toggle("active");
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
      if (!aianChart.classList.contains("hide")) {
        aianChart.classList.add("hide");
      }
      if (!nhpiChart.classList.contains("hide")) {
        nhpiChart.classList.add("hide");
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
              <div id="sort-nhpi">Native Hawaiian/Pacific Islander</div>
              <div id="sort-mixed">Two or more races</div>
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
            <div
              className="chart__column hide" id="chart-nhpi"
            >
              <NHPIChart />
            </div>
            <div
              className="chart__column hide" id="chart-mixed"
            >
              <MixedChart />
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
              Node</a>. This website takes advantage of Create React App.
          </p>
          <p>It is hosted on <a href="https://pages.github.com/">GitHub pages</a>.</p>
          <h4>Plugins</h4>
          <p>
            This website takes advantage of multiple package libraries,
            including <a
              href="https://www.npmjs.com/package/react-scrollmagic"
              target="blank"
              rel="noopener noreferrer"
            >
              Scrollmagic
            </a>, <a
              href="https://www.highcharts.com/blog/post/highcharts-wrapper-for-react-101/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Highcharts
            </a>, and <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
            </a>.
          </p>
          <h4>Data</h4>
          <p>
            Data is from the Department of U.S., through the <a
              href="https://collegescorecard.ed.gov/data/"
              target="_blank"
              rel="noopener noreferrer"
            >
              College Scorecard Data API
            </a>. After obtaining a developer key, I called the data
            by writing a script <code>getData.js</code> and using <a
              href="https://www.npmjs.com/package/node-fetch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node Fetch
            </a> to get the data, I wrote it into
            several different JSON files. I added the JSON data into
            arrays and then exported the arrays so I could manipulate them
            to add them to the charts. The data is from the latest data,
            which was last updated October 30, 2018.
          </p>
        </section>
      </div>
    );
  }
}

export default App;

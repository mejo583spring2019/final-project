import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import byState from "../../data/byState/byState";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./styles.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

/** Class for the BarChart component for the App */
class BarChart extends Component {
  /** Gets all the data for every state in the static data.
   * @return {array} percent chance of reporting crime for each state.
   * @param {Object} data
   */
  getAllData(data) {
    const chartData = [];

    const color =
    {
      color: "#AF9154",
    };

    for (let i = 0; i < data.length; i++) {
      chartData[i] = {
        y: (data[i].total_crime / data[i].population) * 100,
        label: data[i].state,
        color: color.color,
      };

      chartData[i].y = parseFloat(
          Number.parseFloat(chartData[i].y).toFixed(2)
      );
    }
    return chartData;
  }

  /** Calculates the total percent of reporting a crime in the US.
   * @return {float} percent chance of reporting crime.
   * @param {Object} data
   */
  getTotalPercent(data) {
    let total = 0;
    let totalPop = 0;

    for (let i = 0; i < data.length; i++) {
      total = total + parseInt(data[i].total_crime);
      totalPop = totalPop + parseInt(data[i].population);
    }

    let totalPercent = (total / totalPop) * 100;
    totalPercent = parseFloat(Number.parseFloat(totalPercent).toFixed(2));

    return totalPercent;
  }

  /** Gets the top 5 states for reporting a crime.
   * @return {array} percent chance of reporting crime for each state.
   * @param {Object} data
   */
  getTop5Data(data) {
    const chartData = [];

    const color =
    {
      color: "#AF9154",
    };

    const top5 = Object.values(data)
        .sort((a, b) => ((b.total_crime / b.population) * 100)
        - ((a.total_crime / a.population) * 100))
        .slice(0, 5);

    for (let i = 0; i < top5.length; i++) {
      chartData[i] = {
        y: (top5[i].total_crime / top5[i].population) * 100,
        label: top5[i].state,
        color: color.color,
      };
      chartData[i].y = parseFloat(
          Number.parseFloat(chartData[i].y).toFixed(2)
      );
    }
    return chartData;
  }

  /** Gets the bottom 5 states for reporting a crime.
   * @return {array} percent chance of reporting crime.
   * @param {Object} data
   */
  getBottom5Data(data) {
    const chartData = [];

    const color =
    {
      color: "#AF9154",
    };

    const top5 = Object.values(data)
        .sort((a, b) => ((a.total_crime / a.population) * 100)
        - ((b.total_crime / b.population) * 100))
        .slice(0, 5);

    for (let i = 0; i < top5.length; i++) {
      chartData[i] = {
        y: (top5[i].total_crime / top5[i].population) * 100,
        label: top5[i].state,
        color: color.color,
      };
      chartData[i].y = parseFloat(
          Number.parseFloat(chartData[i].y).toFixed(2)
      );
    }
    return chartData;
  }

  /** Renders the data for each array to appear in bar charts.
   * @return {any} JSX content
   */
  render() {
    const options1 = {
      animationEnabled: true,
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "States and District of Columbia",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        labelFormatter: function() {
          return " ";
        },
        labelFontFamily: "secondary",
        gridThickness: 0,
      },
      axisY: {
        title: "Percent By Population",
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridThickness: 0,
      },
      data: [
        {
          type: "column",
          dataPoints: this.getAllData(byState),
          toolTipContent: "{label}: {y}%",
        },
      ],
    };

    const options2 = {
      animationEnabled: true,
      colorSet: "crimeShade",
      theme: "light2",
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "Five Worst States",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        labelFormatter: function() {
          return " ";
        },
        labelFontFamily: "secondary",
        gridThickness: 0,
      },
      axisY: {
        title: "Percent By Population",
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridThickness: 0,
      },
      data: [{
        type: "bar",
        dataPoints: this.getTop5Data(byState),
        toolTipContent: "{label}: {y}%",
      }],
    };

    const options3 = {
      animationEnabled: true,
      colorSet: "crimeShade",
      theme: "light2",
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "Five Best States",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        labelFormatter: function() {
          return " ";
        },
        labelFontFamily: "secondary",
        gridThickness: 0,
      },
      axisY: {
        title: "Percent By Population",
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridThickness: 0,
      },
      data: [{
        type: "bar",
        dataPoints: this.getBottom5Data(byState),
        toolTipContent: "{label}: {y}%",
      }],
    };


    return (
      <div className="backgroundColor">
        <div>
          <h1 className="marPos">Crime By State</h1>
          <div className="maxWidth">
            <p>
              Although crime is decreasing across the country,
              there are still states well above the national
              average. According to the <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.crimesolutions.gov/TopicDetails.aspx?ID=10">
                Crime Solutions
              </a> website, many communities have come up with strategies to
              help reduce crimes. Some of these strategies include
              neighborhood watch, community policing, urban or
              physical design, and comprehensive or
              multi-disciplinary efforts. Many of these strategies
              could be adopted to help communities around the
              nation reduce property crime.
            </p>
          </div>
        </div>

        <Tabs
          defaultActiveKey="profile1"
          transition={false} id="noanim-tab-example">
          <Tab eventKey="profile1" title="All States" unmountOnExit="true">
            <h2>Property Crime Report Rate By State</h2>
            <div className="chartPos">
              <CanvasJSChart options={options1} />
            </div>
            <div className="maxWidth">
              <p>
                Overall, the amount of property crime occurring in the United
                States by population is
                around {this.getTotalPercent(byState)} percent, which was
                calculated from the data produced from the FBI. This number was
                determined by taking the total amount of crime that occurred in
                every state and divide that by the total population in the
                country. Then, this number was multiplied by 100 to get a total
                percentage of the population in the United States who reported a
                property crime in 2015.
              </p>
            </div>
          </Tab>
          <Tab eventKey="profile2" title="Worst States" unmountOnExit="true">
            <h2>Worst States for Property Crime</h2>
            <div className="chartPos">
              <CanvasJSChart options={options2} />
            </div>
            <div className="maxWidth">
              <p>
                According to the report from the FBI in 2015, The worst place to
                experience property crime in the nation is the District of
                Columbia, with 4.68 percent of the population reporting a
                property crime in 2015. The worst state to experience property
                crime in the United States was Hawaii in 2015. Around 3.8
                percent of the population in Hawaii reported a property crime
                during this year.
              </p>
            </div>
          </Tab>
          <Tab eventKey="profile3" title="Best States" unmountOnExit="true">
            <h2>Best States for Property Crime</h2>
            <div className="chartPos">
              <CanvasJSChart options={options3} />
            </div>
            <div className="maxWidth">
              <p>
                According to the report from the FBI in 2015, The best place to
                avoid property crime in the nation was Vermont, with 1.41
                percent of the population reporting a property crime during
                2015. Interestingly, the top five states that had the lowest
                property crime rate fell below two percent.
              </p>
            </div>
          </Tab>
        </Tabs>

        {/* You can get reference to the chart instance as shown above
        using onRef. This allows you to access all chart properties and
        methods*/}
      </div>
    );
  }
}

export default BarChart;

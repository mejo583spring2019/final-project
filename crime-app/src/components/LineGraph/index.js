import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import property from "../../data/property/property";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "./styles.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

/** Class for the BarChart component for the App */
class AreaChart extends Component {
  /** Gets all the data for every year in the static data.
   * @return {array} number of reports in the US.
   * @param {array} data
   */
  getAllData(data) {
    const chartData = [];

    const color =
    {
      color: "#F3E6C3",
    };

    for (let i = 0; i < data.length; i++) {
      chartData[i] = {
        x: parseInt(data[i].year),
        y: parseInt(data[i].total_crime),
        color: color.color,
      };
    }
    return chartData;
  }

  /** Gets all larceny reports for every year in the static data.
   * @return {array} number of larceny reports in the US.
   * @param {array} data
   */
  getAllLarceny(data) {
    const chartData = [];

    const color =
    {
      color: "#F3E6C3",
    };

    for (let i = 0; i < data.length; i++) {
      chartData[i] = {
        x: parseInt(data[i].year),
        y: parseInt(data[i].larceny),
        color: color.color,
      };
    }
    return chartData;
  }

  /** Gets all burglary reports for every year in the static data.
   * @return {array} number of burglary reports in the US.
   * @param {array} data
   */
  getAllBurglary(data) {
    const chartData = [];

    const color =
    {
      color: "#F3E6C3",
    };

    for (let i = 0; i < data.length; i++) {
      chartData[i] = {
        x: parseInt(data[i].year),
        y: parseInt(data[i].burglary),
        color: color.color,
      };
    }
    return chartData;
  }

  /** Gets all vehicle theft reports for every year in the static data.
   * @return {array} number of vehicle theft reports in the US.
   * @param {array} data
   */
  getAllVehTheft(data) {
    const chartData = [];

    const color =
    {
      color: "#F3E6C3",
    };

    for (let i = 0; i < data.length; i++) {
      chartData[i] = {
        x: parseInt(data[i].year),
        y: parseInt(data[i].vehicle_theft),
        color: color.color,
      };
    }
    return chartData;
  }

  /** Renders the data for each array to appear in area charts.
   * @return {any} JSX content
   */
  render() {
    const options1 = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "Years",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        interval: 1,
        valueFormatString: "####",
        labelFontFamily: "secondary",
        labelFontColor: "#F3E6C3",
        labelFontSize: 16,
        lineColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      axisY: {
        title: "Number of Reports",
        includeZero: false,
        labelFormatter: function() {
          return " ";
        },
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      data: [
        {
          type: "area",
          xValueFormatString: "####",
          yValueFormatString: "#,##0 Reports",
          markerSize: 20,
          lineColor: "#AF9154",
          color: "#AF9154",
          dataPoints: this.getAllData(property),
        },
      ],
    };

    const options2 = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "Years",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        interval: 1,
        valueFormatString: "####",
        labelFontFamily: "secondary",
        labelFontColor: "#F3E6C3",
        labelFontSize: 16,
        lineColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      axisY: {
        title: "Number of Reports",
        includeZero: false,
        labelFormatter: function() {
          return " ";
        },
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      data: [
        {
          type: "area",
          xValueFormatString: "####",
          yValueFormatString: "#,##0 Reports",
          markerSize: 20,
          lineColor: "#AF9154",
          color: "#AF9154",
          dataPoints: this.getAllLarceny(property),
        },
      ],
    };

    const options3 = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "Years",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        interval: 1,
        valueFormatString: "####",
        labelFontFamily: "secondary",
        labelFontColor: "#F3E6C3",
        labelFontSize: 16,
        lineColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      axisY: {
        title: "Number of Reports",
        includeZero: false,
        labelFormatter: function() {
          return " ";
        },
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      data: [
        {
          type: "area",
          xValueFormatString: "####",
          yValueFormatString: "#,##0 Reports",
          markerSize: 20,
          lineColor: "#AF9154",
          color: "#AF9154",
          dataPoints: this.getAllBurglary(property),
        },
      ],
    };

    const options4 = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      backgroundColor: "transparent",
      toolTip: {
        fontFamily: "primary",
        fontSize: 21,
        fontColor: "#876933",
      },
      axisX: {
        title: "Years",
        titleFontColor: "#F3E6C3",
        titleFont: "primary",
        interval: 1,
        valueFormatString: "####",
        labelFontFamily: "secondary",
        labelFontColor: "#F3E6C3",
        labelFontSize: 16,
        lineColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      axisY: {
        title: "Number of Reports",
        includeZero: false,
        labelFormatter: function() {
          return " ";
        },
        titleFontColor: "#F3E6C3",
        labelFontColor: "#F3E6C3",
        labelFontFamily: "secondary",
        labelFontSize: 16,
        gridColor: "#F3E6C3",
        tickColor: "#F3E6C3",
      },
      data: [
        {
          type: "area",
          xValueFormatString: "####",
          yValueFormatString: "#,##0 Reports",
          markerSize: 20,
          lineColor: "#AF9154",
          color: "#AF9154",
          dataPoints: this.getAllVehTheft(property),
        },
      ],
    };

    return (
      <div className="backgroundColor">
        <div>
          <h1 className="marPos">Crime Over Time</h1>
          <div className="maxWidth">
            <p>
              It is unclear as to why crime rates have been dropping over the
              years. According to an article written by <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.forbes.com/sites/neilhowe/2015/05/28/whats-behind-the-decline-in-crime/#179faa026f61">
                Neil Howe
              </a> from Forbes, many theories include a change in risk behavior
              from the baby boomers and generation Xer’s to the millennials,
              tightening police forces across the country and the economic
              growth that the United States has experienced over the course of
              its history. Although many of these arguments can be argued that
              crime is a less problem today, for many people it can still be an
              issue. Property crime still affects millions and the most common
              of them relate to larceny, burglary and vehicle theft. This is
              how those numbers have changed over time.
            </p>
          </div>
        </div>
        <Tabs
          defaultActiveKey="profile1"
          transition={false}
          id="noanim-tab-example">
          <Tab eventKey="profile1" title="Overall Reports" unmountOnExit="true">
            <h2>Property Crime Report Rate in The United States</h2>
            <div className="chartPos">
              <CanvasJSChart options={options1} />
            </div>
            <div className="maxWidth">
              <p>
                The overall property crime rate reports have been drastically
                declining every year from 2006 to 2015. Between this nine-year
                period, there has been a decline of more than two million
                reports of property crime in the country. The FBI even
                estimates that this trend will continue to decline over the
                years throughout the country.
              </p>
            </div>
          </Tab>
          <Tab eventKey="profile2" title="Larceny Reports" unmountOnExit="true">
            <h2>Larceny Report Rate in The United States</h2>
            <div className="chartPos">
              <CanvasJSChart options={options2} />
            </div>
            <div className="maxWidth">
              <p>
                Larceny is the most common type of property crime committed in
                the United States. According to the <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.legalmatch.com/law-library/article/robbery-vs-larceny-charges.html">
                  Legal Match
                </a> website,
                larceny is defined as stealing another person’s piece of
                property with an intent to completely deprive them of it. In
                2015, there were over 5.7 million reports of larceny in the
                United States. Although this type of crime is drastically
                falling, it is still the largest problem of property crime that
                occurs in the nation.
              </p>
            </div>
          </Tab>
          <Tab
            eventKey="profile3"
            title="Burglary Reports"
            unmountOnExit="true">
            <h2>Burglary Report Rate in The United States</h2>
            <div className="chartPos">
              <CanvasJSChart options={options3} />
            </div>
            <div className="maxWidth">
              <p>
                Burglary is the second most common type of property crime
                committed in the United States. According to the <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://criminal.findlaw.com/criminal-charges/burglary-overview.html">
                  Find Law
                </a> website, burglary is defined as unlawfully entering a
                building in order to commit a crime. In 2015, there were
                over 1.5 million reports of burglary in the United States.
                Over the years, there has been a lot of improvement for
                reducing the number of reports for burglary in the United
                States.
              </p>
            </div>
          </Tab>
          <Tab
            eventKey="profile4"
            title="Vehicle Theft Reports"
            unmountOnExit="true">
            <h2>Vehicle Theft Report Rate in The United States</h2>
            <div className="chartPos">
              <CanvasJSChart options={options4} />
            </div>
            <div className="maxWidth">
              <p>
                Vehicle theft is another common type of property crime that
                occurs in the United States. Although vehicle theft has
                drastically dropped since 2006, there was a small increase in
                the crime from 2014 to 2015. According to the <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.nhtsa.gov/road-safety/vehicle-theft-prevention">National Highway
                Traffic Safety Administration
                </a>, this crime can be very costly to the victim when this
                occurs. Unfortunately, around 42 percent of stolen vehicles
                are never recovered.
              </p>
            </div>
          </Tab>
        </Tabs>

        {/* You can get reference to the chart instance as shown above using
        onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default AreaChart;

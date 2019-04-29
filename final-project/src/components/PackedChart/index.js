import Highcharts from "highcharts";
// eslint-disable-next-line camelcase
import HC_more from "highcharts/highcharts-more"; // init module
import HighchartsReact from "highcharts-react-official";
import React, { Component } from "react";
import appalachian from "../../data/app/app";
import davidson from "../../data/davidson";
import duke from "../../data/duke";
import ecu from "../../data/ecu";
import elizabethCity from "../../data/elizabeth-city-state";
import elon from "../../data/elon";
import ncsu from "../../data/ncsu";
import uncSchools from "../../data/unc-schools";
import wake from "../../data/wake-forest";
import wcu from "../../data/wcu"; // module
// eslint-disable-next-line new-cap
HC_more(Highcharts);


// console.log(byRace);

/** Creates a packedbubble chart showing
 * different racial completion rates at particular
 * NC colleges & Universities
 */
class PackedChart extends Component {
  /** Constructor builds out the data set
   * @param {any} props
  */
  constructor(props) {
    super(props);
    this.appData = appalachian.map((r) => {
      if (r["school.name"] === "Appalachian State University") {
        return r;
      }
      return r;
    });

    this.davidsonData = davidson;
    this.dukeData = duke;
    this.ecuData = ecu;
    this.elizabethCityData = elizabethCity;
    this.elonData = elon;
    this.ncsuData = ncsu;
    this.uncSchoolsData = uncSchools;
    this.wakeData = wake;
    this.wcuData = wcu;

    this.fullData = this.appData.concat(
        this.davidsonData, this.dukeData, this.ecuData,
        this.elizabethCityData, this.elonData, this.ncsuData,
        this.uncSchoolsData, this.wcuData
    );

    const byRace = [];

    const raceProperties = [
      {
        name: "White",
        shorthand: "white",
      }, {
        name: "Black",
        shorthand: "black",
      }, {
        name: "Asian",
        shorthand: "asian",
      }, {
        name: "American Indian/Alaskan Native",
        shorthand: "aian",
      }, {
        name: "Native Hawaiian/Pacific Islander",
        shorthand: "nhpi",
      }, {
        name: "Two or more races",
        shorthand: "2ormore",
      }, {
        name: "Race Unknown",
        shorthand: "race.unknown",
      },
    ];

    raceProperties.forEach((r) => {
      const raceTitle = r.name;
      const raceData = byRace[raceTitle] || [];
      this.fullData.forEach((s) => {
        if (s["school.name"] !== "Appalachian Bible College") {
          if (s["latest.completion.completion_rate_4yr_150nt"] !== null) {
            const sName = s["school.name"];
            const rRate = s[
                `latest.completion.completion_rate_4yr_150_${r.shorthand}`
            ];
            raceData.push({
              name: sName,
              value: rRate * 100,
            });
          }
        }
      });

      byRace.push({
        name: r.name,
        data: raceData,
      });
    });

    this.options = {
      chart: {
        type: "packedbubble",
        height: "100%",
      },
      title: {
        text: "Completion Rate of Students by Race",
      },
      tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}:</b> {point.y}%",
      },
      plotOptions: {
        packedbubble: {
          minSize: "35%",
          maxSize: "200%",
          zMin: 0,
          zMax: 2000,
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.02,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            filter: {
              property: "y",
              operator: ">",
              value: 250,
            },
            style: {
              color: "black",
              textOutline: "none",
              fontWeight: "normal",
            },
          },
        },
      },
      series: byRace,
    };
  }

  /** renders high charts using data from above
  * @return {any} JSX to create a Highchart
  */
  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.options}
        />
      </div>
    );
  }
}

export default PackedChart;

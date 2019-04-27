import BarChart from "../BarChart";
import appalachian from "../../data/app/app";
import davidson from "../../data/davidson";
import duke from "../../data/duke";
import ecu from "../../data/ecu";
import elizabethCity from "../../data/elizabeth-city-state";
import elon from "../../data/elon";
import ncsu from "../../data/ncsu";
import uncSchools from "../../data/unc-schools";
import wake from "../../data/wake-forest";
import wcu from "../../data/wcu";

class WhiteChart extends BarChart {
  constructor(props) {
    super(props);
    this.appData = appalachian.map((r) => {
      if (r["school.name"] === "Appalachian State University") {
        return r;
      }
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

    this.fullData = this.appData.concat(this.davidsonData, this.dukeData, this.ecuData, this.elizabethCityData, this.elonData, this.ncsuData, this.uncSchoolsData, this.wcuData);

    const whiteCompletion = [];
    const schoolName = [];

    this.fullData.forEach((s) => {
      if (s !== undefined && s["latest.completion.completion_rate_4yr_150_white"] !== null) {
        schoolName.push(s["school.name"]);
        whiteCompletion.push(s["latest.completion.completion_rate_4yr_150_white"]);
      }
    });
    console.log(whiteCompletion);
    console.log(schoolName);

    this.type = "column";
    this.chartData = whiteCompletion;
    this.title = "Completion Rates of white Students";
    this.xAxis = schoolName;

    this.options = {
      chart: {
        type: this.type,
      },
      title: {
        text: this.title,
      },
      xAxis: {
        categories: this.xAxis,
        title: {
          text: "School",
        },
      },
      series: [
        {
          data: this.chartData,
        },
      ],
    };
  }
}

export default WhiteChart;

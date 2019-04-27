import BarChart from "../BarChart";
import appalachian from "../../data/appalachian";
import davidson from "../../data/davidson";
import duke from "../../data/duke";
import ecu from "../../data/ecu";
import elizabethCity from "../../data/elizabeth-city-state";
import elon from "../../data/elon";
import ncsu from "../../data/ncsu";
import uncSchools from "../../data/unc-schools";
import wake from "../../data/wake-forest";
import wcu from "../../data/wcu";

class BlackChart extends BarChart {
  type = "column";
  chartData = [1, 2, 3];
  title = "My Other cool TItle";

  options = {
    chart: {
      type: this.type,
    },
    title: {
      text: this.title,
    },
    series: [
      {
        data: this.chartData,
      },
    ],
  };
}

export default BlackChart;

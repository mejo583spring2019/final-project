import React from "react";
// import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import hcMore from "highcharts/highcharts-more.src"; // module

if (typeof Highcharts === "object") {
  hcMore(Highcharts);
}

const options = {
  chart: {
    type: "column",
  },

  title: {
    text: "Deadliest Characters: Most On-Screen Kills",
  },

  subtitle: {
    text: "Source: <a href=\"https://www.washingtonpost.com/graphics/entertainment/game-of-thrones/?utm_term=.027e86563c23\" target=\"_blank\">The Washington Post</a>",
  },
  xAxis: {
    type: "category",
  },
  yAxis: {
    title: {
      text: "Total On-Screen Kills (seasons 1-7)",
    },

  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
      },
    },
  },

  tooltip: {
    pointFormat: "<b>Total Kills: </b>{point.y}<br/> <b>Deadliest Weapon: </b>{point.weapon} <br/><b>Largest Massacre: </b>{point.massacre}",
    // pointFormat: "<span style=\"color:{point.color}\">{point.name}</span>: <b>{point.y:.2f}%</b> kills<br/>",
  },

  series: [
    {
      name: "Characters",
      colorByPoint: true,
      data: [
        {
          name: "Cersei Lannister",
          y: 199,
          weapon: "Wildfire",
          massacre: "Explosion at the Great Sept of Baelor (198 kills)",
        },
        {
          name: "Rhaegal",
          y: 171,
          weapon: "Dragonfire",
          massacre: "Battle on the frozen lake during the Wight Hunt (170 kills)",
        },
        {
          name: "Drogon",
          y: 135,
          weapon: "Dragonfire",
          massacre: "Battle of Goldroad (71 kills)",
        },
        {
          name: "Jon Snow",
          y: 86,
          weapon: "Sword (Longclaw)",
          massacre: "Battle on the frozen lake during the Wight Hunt (42 kills)",
        },
        {
          name: "Arya Stark",
          y: 64,
          weapon: "Poison",
          massacre: "Assassinations ar the Twins (48 kills)",
        },
      ],
    },
  ],
};

/**
 * create app
 */
class Barchart extends React.Component {
  /**
   * @return {chart}
   */
  render() {
    return (
      <div><HighchartsReact highcharts={Highcharts} options={options} /></div>
    );
  }
}
export default Barchart;

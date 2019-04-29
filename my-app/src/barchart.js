import React from "react";
// import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import hcMore from "highcharts/highcharts-more.src"; // module
// highcharts-more code taken from forum advice https://github.com/highcharts/highcharts-react/issues/76
if (typeof Highcharts === "object") {
  hcMore(Highcharts);
}
// making the Deadliest Characters Highcharts bar chart
const options = {
  chart: {
    type: "column",
    height: "650px",
    backgroundColor: "#6D90A3",
    style: {
      color: "#000 !important",
      textOutline: "none",
      paddingTop: "1%",
    },
  },

  title: {
    text: "Deadliest Characters: Most On-Screen Kills",
    style: {
      color: "#000 !important",
      textOutline: "none",
      paddingTop: "10%",
      textSize: "20px",
    },
  },

  subtitle: {
    text: "Source: <a href=\"https://www.washingtonpost.com/graphics/entertainment/game-of-thrones/?utm_term=.027e86563c23\" target=\"_blank\">The Washington Post</a>",
  },
  xAxis: {
    type: "category",
    style: {
      color: "#000 !important",
      fill: "#000 !important",
      textOutline: "none",
    },
  },
  yAxis: {
    title: {
      text: "Total On-Screen Kills (seasons 1-7)",
      style: {
        color: "#000 !important",
        fill: "#000 !important",
        textOutline: "none",
      },
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
    // I could not simply create a new line for the
    // point format without breaking the code
    // eslint-disable-next-line max-len
    pointFormat: "<b>Total Kills: </b>{point.y}<br/> <b>Deadliest Weapon: </b>{point.weapon} <br/><b>Largest Massacre: </b>{point.massacre}",
  },

  series: [
    {
      name: "Characters",
      colorByPoint: true,
      data: [
        {
          name: "Cersei Lannister",
          color: "rgba(255,165,0, .7)",
          y: 199,
          weapon: "Wildfire",
          massacre: "Explosion at the Great Sept of Baelor (198 kills)",
        },
        {
          name: "Rhaegal",
          color: "rgba(85,107,47,.7)",
          y: 171,
          weapon: "Dragonfire",
          // eslint-disable-next-line max-len
          massacre: "Battle on the frozen lake during the Wight Hunt (170 kills)",
        },
        {
          name: "Drogon",
          color: "rgba(178,34,34,.7)",
          y: 135,
          weapon: "Dragonfire",
          massacre: "Battle of Goldroad (71 kills)",
        },
        {
          name: "Jon Snow",
          color: "rgba(105,105,105, .7)",
          y: 86,
          weapon: "Sword (Longclaw)",
          // eslint-disable-next-line max-len
          massacre: "Battle on the frozen lake during the Wight Hunt (42 kills)",
        },
        {
          name: "Arya Stark",
          color: "rgba(85,107,47,.7)",
          y: 64,
          weapon: "Poison",
          massacre: "Assassinations ar the Twins (48 kills)",
        },
      ],
    },
  ],
};

/**
 * create Deadlist Characters chart
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

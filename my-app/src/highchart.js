import React, { Component } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import hcMore from "highcharts/highcharts-more.src"; // module

if (typeof Highcharts === "object") {
  hcMore(Highcharts);
}

const options = {
  chart: {
    type: "packedbubble",
    height: "100%",
  },
  title: {
    text: "Deadiliest Houses in Game of Thrones",
  },
  tooltip: {
    useHTML: true,
    // eslint-disable-next-line max-len
    pointFormat: "<b>{point.name}</b><br/> <b>Killed: </b>{point.value}<br/> <b>Victims: </b>{point.victims}",
  },
  plotOptions: {
    packedbubble: {
      minSize: "20%",
      maxSize: "100%",
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: true,
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
  series: [{
    name: "House Stark",
    color: "rgba(46, 204, 113, .5)",
    opacity: "10",
    data: [{
      name: "Arya Stark",
      value: 11,
      victims: "Red Keep Stableboy, Frey Soldier, Polliver, Rorge, Ghita, Meryn Trant, The Waif, Black Walder Rivers, Lothar Frey, Walder Frey, Petyr Baelish",
    },
    {
      name: "Eddard Stark",
      value: 4,
      victims: "Arthur Dayne, Will, Lady, Gerold Hightower",
    },
    {
      name: "Ghost",
      value: 1,
      victims: "Rast",
    },
    {
      name: "Grey Wind",
      value: 1,
      victims: "Rennick",
    },
    {
      name: "Robb Stark",
      value: 2,
      victims: "Wallen, Rickard Karstark",
    },
    {
      name: "Summer",
      value: 1,
      victims: "Catspaw Assassin",
    },
    {
      name: "Jon Snow",
      value: 13,
      // eslint-disable-next-line max-len
      victims: "Othor, Qhorin Halfhand, Orell, Karl Tanner, Styr, Mance Rayder, Janos Slynt, White Walker, Alliser Thorne, Othell Yarwyck, Bowen Marsh, Olly, Lyanna Stark",
    }],
  }, {
    name: "House Targaryen",
    data: [{
      name: "Aerys II Targaryen",
      value: 2,
      victims: "Brandon Stark, Rickard Stark",
    },
    {
      name: "Daenerys Targaryen",
      value: 13,
      // eslint-disable-next-line max-len
      victims: "Khal Drogo, Mirri Maz Duur, Doreah, Xaro Xhoan Daxos, Khal Rhalko, Khal Brozho, Khal Qorro, Khal Forzho, Khal Moro, Dothraki Bloodrider #1, Dothraki Bloodrider #2, Randyll Tarly, Dickon Tarly",
    },
    {
      name: "Drogon",
      value: 3,
      victims: "Pyat Pree, Kraznys mo Nakloz, Zalla",
    },
    {
      name: "Rhaegal",
      value: 1,
      victims: "Great Master #1",
    }],
  }, {
    name: "House Baratheon",
    data: [{
      name: "Robert Baratheon",
      value: 1,
      victims: "Rhaegar Targaryen",
    },
    {
      name: "Stannis Baratheon",
      value: 2,
      victims: "Gordy, Simpson",
    },
    {
      name: "Selyse Baratheon",
      value: 1,
      victims: "Selyse Baratheon",
    },
    {
      name: "Joffrey Baratheon",
      value: 1,
      victims: "Ros",
    },
    {
      name: "Tommen Baratheon",
      value: 1,
      victims: "Tommen Baratheon",

    }],
  }, {
    name: "House Lannister",
    data: [{
      name: "Jamie Lannister",
      value: 5,
      // eslint-disable-next-line max-len
      victims: "Aerys II Targaryen, Jory Cassel, Alton Lannister, Torrhen Karstark, Olenna Tyrell",
    },
    {
      name: "Tyrion Lannister",
      value: 2,
      victims: "Shae, Tywin Lannister",
    },
    {
      name: "Cersei Lannister",
      value: 7,
      // eslint-disable-next-line max-len
      victims: "Lancel Lannister, High Sparrow, Loras Tyrell, Mace Tyrell, Margaery Tyrell, Kevan Lannister, Tyene Sand",
    }],
  }, {
    name: "House Martell",
    data: [{
      name: "El Salvador",
      value: 7,
    },
    {
      name: "Venezuela",
      value: 1,
    }],
  }, {
    name: "House Greyjoy",
    data: [{
      name: "El Salvador",
      value: 7,
    },
    {
      name: "Venezuela",
      value: 1,
    }],
  }, {
    name: "House Frey",
    data: [{
      name: "El Salvador",
      value: 7,
    },
    {
      name: "Venezuela",
      value: 1,
    }],
  }, {
    name: "House Tully",
    data: [{
      name: "El Salvador",
      value: 7,
    },
    {
      name: "Venezuela",
      value: 1,
    }],
  }, {
    name: "House Tyrell",
    data: [{
      name: "Nepal",
      value: 2,
    },
    {
      name: "Georgia",
      value: 5,
    },
    {
      name: "Brunei Darussalam",
      value: 4,
    }],
  }],
};

/**
 * create app
 */
class Chart extends React.Component {
  /**
 * @return {hello}
 */
  render() {
    return (
      <div><HighchartsReact highcharts={Highcharts} options={options} /></div>
    );
  }
}
export default Chart;

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
    type: "packedbubble",
    height: "700px",
    // plotBackgroundImage: "https://atgbcentral.com/data/out/71/4541111-game-of-thrones-season-5-wallpaper.jpg",
    backgroundColor: "#F2D8A7",
    events: {
      click: function() {
        this.tooltip.hide();
      },
    },
  },
  legend: {
    align: "center",
    verticalAlign: "top",
    floating: true,
    x: 0,
    y: 30,
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
      minSize: "5%",
      maxSize: "600%",
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        gravitationalConstant: 0.01,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: true,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        // filter: {
        //   property: "y",
        //   operator: ">",
        //  value: 1,
        //  },
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
    label: "House Stark",
    color: "rgba(120,120,120,1)",
    data: [{
      name: "Arya Stark",
      value: 11,
      // eslint-disable-next-line max-len
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
    color: "rgba(219, 40, 0, 1)",
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
    color: "rgba(101,67,33,1)",
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
    color: "rgba(255,165,0, .5)",
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
    color: "rgba(230, 126, 34, 1)",
    data: [{
      name: "Ellaria Sand",
      value: 2,
      victims: "Myrcella Baratheon, Doran Martell",
    },
    {
      name: "Tyene Sand",
      value: 2,
      victims: "Areo Hotah, Maester Caleotte",
    },
    {
      name: "Obara Sand",
      value: 2,
      victims: "Merchant Captain, Trystane Martell",
    }],
  }, {
    name: "House Greyjoy",
    color: "rgba(72,72,72,1))",
    data: [{
      name: "Euron Greyjoy",
      value: 3,
      victims: "Balon Greyjoy, Obara Sand, Nymeria Sand",
    },
    {
      name: "Theon Greyjoy",
      value: 5,
      victims: "Stiv, Rodrik Cassel, Myranda, Bolton Soldier, Harrag",
    }],
  }, {
    name: "House Frey",
    color: "rgba(50, 71, 139, 1)",
    data: [{
      name: "Black Walder Rivers",
      value: 1,
      victims: "Catelyn Stark",
    },
    {
      name: "Lothar Frey",
      value: 1,
      victims: "Talisa Maegyr",
    }],
  }, {
    name: "House Bolton",
    color: "rgba(155, 3, 3, 1)",
    data: [{
      name: "Ramsay Snow",
      value: 9,
      // eslint-disable-next-line max-len
      victims: "Master Torturer, Medger Cerwyn, Lady Cerwyn, Unidentified Cerwyn, Old Woman, Roose Bolton, Osha, Rickon Stark, Wun Wun",
    },
    {
      name: "Roose Bolton",
      value: 1,
      victims: "Robb Stark",
    }],
  }, {
    name: "House Tyrell",
    color: "rgba(56, 143, 88, 1)",
    data: [{
      name: "Olenna Tyrell",
      value: 1,
      victims: "Joffrey Baratheon",
    }],
  }],
};

/**
 * create app
 */
class Chart extends React.Component {
  /**
 * @return {chart}
 */
  render() {
    return (
      <div><HighchartsReact highcharts={Highcharts} options={options} /></div>
    );
  }
}
export default Chart;

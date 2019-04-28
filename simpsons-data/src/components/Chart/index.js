import React from "react";
// import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// used Andrea's help to figure out how to get the highcharts-more package
// to install/work.
import hcMore from "highcharts/highcharts-more.src";
if (typeof Highcharts === "object") {
  hcMore(Highcharts);
}
// const options = {
//   title: {
//     text: "My stock chart",
//   },
//   series: [
//     {
//       data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9],
//     },
//   ],
// };
const options = {
  chart: {
    type: "packedbubble",
    height: "700px",
  },
  title: {
    text: "My chart",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}</b>",
    // pointFormat: "<b>{point.name}:</b> {point.y}m CO<sub>2</sub>",
  },
  plotOptions: {
    packedbubble: {
      // useSimulation: true,
      minSize: "50%",
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
          color: "purple",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series:
    [{
      name: "Dan Castellaneta",
      data: [
        {
          name: "Homer Simpson",
          value: 1,
        },
        {
          name: "Abraham Simpson",
          value: 1,
        },
        {
          name: "Krusty the Klown",
          value: 1,
        },
        {
          name: "Barney Gumble",
          value: 1,
        },
        {
          name: "Groundskeeper Willie",
          value: 1,
        },
        {
          name: "Sideshow Mel",
          value: 1,
        },
        {
          name: "Mayor Quimby",
          value: 1,
        },
        {
          name: "Squeaky-Voiced Teen",
          value: 1,
        },
        {
          name: "Hans Moleman",
          value: 1,
        },
        {
          name: "Itchy",
          value: 1,
        },
        {
          name: "Gil Gunderson",
          value: 1,
        },
        {
          name: "Rich Texan",
          value: 1,
        },
        {
          name: "Mr. Teeny",
          value: 1,
        },
        {
          name: "Kodos",
          value: 1,
        },
      ],
    },
    {
      name: "Julie Kavner",
      data: [
        {
          name: "Marjorie \"Marge\" Simpson",
          value: 1,
        },
        {
          name: "Selma Bouvier",
          value: 1,
        },
        {
          name: "Patty Bouvier",
          value: 1,
        },
        {
          name: "Jacqueline Ingrid Bouvier",
          value: 1,
        },
      ],
    },
    {
      name: "Yeardley Smith",
      data: [
        {
          name: "Lisa Simpson",
          value: 1,
        },
      ],
    },
    {
      name: "Nancy Cartwright",
      data: [
        {
          name: "Bart Simpson",
          value: 1,
        },
        {
          name: "Maggie Simpson",
          value: 1,
        },
        {
          name: "Nelson Muntz",
          value: 1,
        },
        {
          name: "Ralph Wiggum",
          value: 1,
        },
        {
          name: "Todd Flanders",
          value: 1,
        },
        {
          name: "Kearney Zzyzwicz Sr.",
          value: 1,
        },
      ],
    },
    {
      name: "Harry Shearer",
      data: [
        {
          name: "Charles Montgomery Burns",
          value: 1,
        },
        {
          name: "Lenny Leonard",
          value: 1,
        },
        {
          name: "Seymour Skinner",
          value: 1,
        },
        {
          name: "Ned Flanders",
          value: 1,
        },
        {
          name: "Kent Brockman",
          value: 1,
        },
        {
          name: "Waylon Smithers",
          value: 1,
        },
        {
          name: "Dr. Julius Hibbert",
          value: 1,
        },
        {
          name: "Reverend Timothy Lovejoy",
          value: 1,
        },
        {
          name: "Otto Mann",
          value: 1,
        },
        {
          name: "Jasper Beardly",
          value: 1,
        },
        {
          name: "Scratchy",
          value: 1,
        },
        {
          name: "Officer Eddie",
          value: 1,
        },
        {
          name: "Rainer \"McBain\" Wolfcastle",
          value: 1,
        },
        {
          name: "Dewey Largo",
          value: 1,
        },
        {
          name: "Judge Roy Snyder",
          value: 1,
        },
        {
          name: "Kang",
          value: 1,
        },
        {
          name: "Dr. Marvin Monroe",
          value: 1,
        },
      ],
    },
    {
      name: "Hank Azaria",
      data: [
        {
          name: "Moe Szyslak",
          value: 1,
        },
        {
          name: "Apu Nahasapeemapetilon",
          value: 1,
        },
        {
          name: "Chief Clancy Wiggum",
          value: 1,
        },
        {
          name: "Carl Carlson",
          value: 1,
        },
        {
          name: "Officer Lou",
          value: 1,
        },
        {
          name: "Comic Book Guy",
          value: 1,
        },
        {
          name: "Professor John Nerdelbaum Frink, Jr.",
          value: 1,
        },
        {
          name: "Cletus Spuckler",
          value: 1,
        },
        {
          name: "Superintendant Chalmers",
          value: 1,
        },
        {
          name: "Snake",
          value: 1,
        },
        {
          name: "Sea Captain McCallister",
          value: 1,
        },
        {
          name: "Kirk Van Houten",
          value: 1,
        },
        {
          name: "Disco Stu",
          value: 1,
        },
        {
          name: "Luigi",
          value: 1,
        },
        {
          name: "Dr. Nick Riviera",
          value: 1,
        },
        {
          name: "Duffman",
          value: 1,
        },
      ],
    },
    {
      name: "Pamela Hayden",
      data: [
        {
          name: "Milhouse Van Houten",
          value: 1,
        },
        {
          name: "Rod Flanders",
          value: 1,
        },
      ],
    },
    {
      name: "Tress MacNeille",
      data: [
        {
          name: "Jimbo Jones",
          value: 1,
        },
        {
          name: "Dolph",
          value: 1,
        },
      ],
    }],
};
/** this is a JSDOC comment*/
class Chart extends React.Component {
  /** this is a JSDOC comment
   * @return {div}
  */
  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          //   constructorType={"packedbubble"}
          options={options} />
      </div>
    );
  }
}
export default Chart;

// const App = () => (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );

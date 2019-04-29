import React from "react";
// import { addIndicators } from "plugins/debug.addIndicators.js";
// import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// used Andrea's help to figure out how to get the highcharts-more package
// to install/work.
import hcMore from "highcharts/highcharts-more.src";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";

if (typeof Highcharts === "object") {
  hcMore(Highcharts);
}
const options = {
  chart: {
    type: "packedbubble",
    height: "600px",
    backgroundColor: "#FFD938",
  },
  title: {
    text: "The Simpsons - Characters by Appearance and Voice Actor",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.y} appearances in the series",
  },
  colors: [
    "#E87D21",
    "#2B4AD0",
    "#FFD938",
    "#048ABF",
    "#D93030",
    "#001EA6",
    "#5FA1F4",
    "#4BA672",
    "#353940",
  ],

  plotOptions: {
    packedbubble: {
      // useSimulation: true,
      minSize: "40%",
      maxSize: "70%",
      zMin: 0,
      zMax: 700,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: false,
        parentNodeLimit: true,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 90,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
          fontFamily: "Gloria Hallelujah",


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
          value: 664,
        },
        {
          name: "Abraham Simpson",
          value: 258,
        },
        {
          name: "Krusty the Klown",
          value: 226,
        },
        {
          name: "Barney Gumble",
          value: 179,
        },
        {
          name: "Groundskeeper Willie",
          value: 160,
        },
        {
          name: "Sideshow Mel",
          value: 140,
        },
        {
          name: "Mayor Quimby",
          value: 128,
        },
        {
          name: "Squeaky-Voiced Teen",
          value: 80,
        },
        {
          name: "Hans Moleman",
          value: 61,
        },
        {
          name: "Itchy",
          value: 57,
        },
        {
          name: "Gil Gunderson",
          value: 51,
        },
        {
          name: "Rich Texan",
          value: 34,
        },
        {
          name: "Mr. Teeny",
          value: 19,
        },
        {
          name: "Kodos",
          value: 17,
        },
      ],
    },
    {
      name: "Julie Kavner",
      data: [
        {
          name: "Marjorie \"Marge\" Simpson",
          value: 664,
        },
        {
          name: "Selma Bouvier",
          value: 89,
        },
        {
          name: "Patty Bouvier",
          value: 82,
        },
        {
          name: "Jacqueline Ingrid Bouvier",
          value: 12,
        },
      ],
    },
    {
      name: "Yeardley Smith",
      data: [
        {
          name: "Lisa Simpson",
          value: 663,
        },
      ],
    },
    {
      name: "Nancy Cartwright",
      data: [
        {
          name: "Bart Simpson",
          value: 662,
        },
        {
          name: "Maggie Simpson",
          value: 259,
        },
        {
          name: "Nelson Muntz",
          value: 250,
        },
        {
          name: "Ralph Wiggum",
          value: 181,
        },
        {
          name: "Todd Flanders",
          value: 58,
        },
        {
          name: "Kearney Zzyzwicz Sr.",
          value: 35,
        },
      ],
    },
    {
      name: "Harry Shearer",
      data: [
        {
          name: "Charles Montgomery Burns",
          value: 382,
        },
        {
          name: "Lenny Leonard",
          value: 310,
        },
        {
          name: "Seymour Skinner",
          value: 306,
        },
        {
          name: "Ned Flanders",
          value: 265,
        },
        {
          name: "Kent Brockman",
          value: 220,
        },
        {
          name: "Waylon Smithers",
          value: 177,
        },
        {
          name: "Dr. Julius Hibbert",
          value: 174,
        },
        {
          name: "Reverend Timothy Lovejoy",
          value: 129,
        },
        {
          name: "Otto Mann",
          value: 123,
        },
        {
          name: "Jasper Beardly",
          value: 87,
        },
        {
          name: "Scratchy",
          value: 56,
        },
        {
          name: "Officer Eddie",
          value: 56,
        },
        {
          name: "Rainer \"McBain\" Wolfcastle",
          value: 48,
        },
        {
          name: "Dewey Largo",
          value: 33,
        },
        {
          name: "Judge Roy Snyder",
          value: 29,
        },
        {
          name: "Kang",
          value: 18,
        },
        {
          name: "Dr. Marvin Monroe",
          value: 12,
        },
      ],
    },
    {
      name: "Hank Azaria",
      data: [
        {
          name: "Moe Szyslak",
          value: 375,
        },
        {
          name: "Apu Nahasapeemapetilon",
          value: 325,
        },
        {
          name: "Chief Clancy Wiggum",
          value: 305,
        },
        {
          name: "Carl Carlson",
          value: 275,
        },
        {
          name: "Officer Lou",
          value: 140,
        },
        {
          name: "Comic Book Guy",
          value: 114,
        },
        {
          name: "Professor John Nerdelbaum Frink, Jr.",
          value: 100,
        },
        {
          name: "Cletus Spuckler",
          value: 89,
        },
        {
          name: "Superintendant Chalmers",
          value: 87,
        },
        {
          name: "Snake",
          value: 80,
        },
        {
          name: "Sea Captain McCallister",
          value: 72,
        },
        {
          name: "Kirk Van Houten",
          value: 56,
        },
        {
          name: "Disco Stu",
          value: 37,
        },
        {
          name: "Luigi",
          value: 36,
        },
        {
          name: "Dr. Nick Riviera",
          value: 34,
        },
        {
          name: "Duffman",
          value: 24,
        },
      ],
    },
    {
      name: "Pamela Hayden",
      data: [
        {
          name: "Milhouse Van Houten",
          value: 277,
        },
        {
          name: "Rod Flanders",
          value: 83,
        },
      ],
    },
    {
      name: "Tress MacNeille",
      data: [
        {
          name: "Jimbo Jones",
          value: 63,
        },
        {
          name: "Dolph",
          value: 61,
        },
      ],
    }],
};
const SectionWipesStyled = styled.div`
  overflow: hidden;
`;


/** this is a JSDOC comment*/
class Chart extends React.Component {
  /** this is a JSDOC comment
   * @return {div}
  */
  render() {
    return (
      <div>
        <SectionWipesStyled>
          <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
            <Scene pin>
              <div className="panel chart">
                <HighchartsReact
                  highcharts={Highcharts}
                  //   construtorType={"packedbubble"}
                  options={options} />
              </div>
            </Scene>

          </Controller>
        </SectionWipesStyled>
      </div >
    );
  }
}
export default Chart;

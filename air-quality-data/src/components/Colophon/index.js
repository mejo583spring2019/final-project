import React, { Component } from "react";
import "./style.css";

/** Colophone creates a react element for the colophon
   */
class Colophon extends Component {
  /** sets intial display stte
                                         */
  constructor() {
    super();
    this.state = {
      colophon: false,
    };
  }

  /** Toggles display state of colophon based on state
                                         */
  toggleColophon() {
    this.setState({ colophon: !this.state.colophon });
    if (this.state.colophon === true) {
      // console.log(this.state.colophon + "show")
    } else {
      // console.log('colophon is hidden')
    }
  }

  /** render the Colophon component
         * in a container including text
         * @return {any} one single group chart
        */
  render() {
    return (
      <div>
        <button id="colophon-open"
          onClick={this.toggleColophon.bind(this)}>
                    Learn how this page was made!
        </button>
        <div id="colophon-full">
          <p>
                        As a person with many
                        (diverse) interests, sitting
                        down to look at a project
                        like this as a whole
                        reveals something
                        interesting to me. I chose air quality as
                        the to “prove that I
                        could make an environmentally
                        related site that showed a data-driven
                        story in a mature way.”
                        Reflecting on the experience,
                        this project combined both my academic
                        and personal interests. As a double major in
                        Environmental Studies and Journalism,
                        I was able
                        to use skills I’ve learned in GIS classes
                        to create a map that I feel
                        accurately displays data,
                        as well as write about places I’ve visited and
                        studied due to their sustainability initiatives.
          </p>


          <p>Air quality data for the map came
              from <a target="_blank" href="https://ourworldindata.org/air-pollution">
                            Our World in Data</a>,
an amazing open-source platform for
educating people of all levels about
the world we live in. The GeoJSON for
               the world came from <a target="_blank"
            href="https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson">
                            Data Hub </a> on GitHub.
Air quality data for Raleigh, NC, USA
came from the EPA and car ownership
Data for Raleigh came from
               the <a target="_blank"
            href="hhttps://factfinder.census.gov/faces/tableservices/jsf/pages/productview.xhtml?src=bkmk">
                            US Census Bureau </a>.
Air quality data for Copenhagen, DK, came from the
          <a href="https://www2.dmu.dk/1_Viden/2_miljoe-tilstand/3_luft/4_maalinger/5_database/PaenTabel_en.asp?aarstal=All&stofId=30&station=1&station=12&station=5&Sttype_1=on&Sttype_4=on&Sttype_2=on&Sttype_5=on&Sttype_3=on&Sttype_6=on&Select=Show+table" target="_blank">
                            Aarhus University Department
                             of Environmental Science</a>
                        and car ownership Data for
                         Copenhagen came from <a target="_blank"
            href="https://www.statbank.dk/statbank5a/default.asp?w=1280">Statistics Denmark </a>.</p>

          <p>The Global Air Quality data was manually
                      cleaned in Microsoft Excel and converted in
                      to keyed JSON using an online conversion tool.
                      A new object was then created to match these two JSON
               files together to make the map using <a target="_blank"
            href="https://reactjs.org/">React.js </a> and <a target="_blank"
            href="https://d3js.org/">D3.js </a>. Seed code for the map came from
          <a target="_blank" href="https://medium.com/@zimrick/how-to-create-pure-react-svg-maps-with-topojson-and-d3-geo-e4a6b6848a98">
                            Medium </a>. </p>

          <p>The city data was manually cleaned and re-arranged in Excel and used to make the line chart with the help of the npm package  <a target="_blank" href="https://github.com/jerairrest/react-chartjs-2">chartjs-2 </a> and <a target="_blank" href="https://reactjs.org/">React </a>. </p>

          <p>Everything was coded on my 2015 MacBook
              Retina Pro using Visual Studio Code.</p>

          <p>To see more of my work visit my <a target="_blank" href="http://www.bridgethhwilliams.com">portfolio</a>. </p>

        </div>
      </div>
    );
  }
}
export default Colophon;

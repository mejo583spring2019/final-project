/* eslint-disable require-jsdoc */
import React from "react";
import "./style.css";

class Colophon extends React.Component {
  render() {
    return (
      <section class="colophon">
        <div class="colophon-2 flex">
          <div id="colophon-body">
            <h1>
                  Colophon
            </h1>
            <p>
              I designed this app specifically to highlight
              the importance of taking care of the earth
              and to create an interactive experience that
              made learning about ecological preservation
              enjoyable and interesting.
              <br /><br />
                The data I used has been pulled from the
              <a href="https://usda.library.cornell.edu/concern/publications/rn301137d?locale=en"> USDA's extensive research</a> on the matter.
                I have also pulled facts from
              <a href="https://www.nrdc.org/sites/default/files/bees.pdf"> the Natural Resources Defense Council </a>
              and <a href="https://www.epa.gov/pollinator-protection/colony-collapse-disorder"> the Environmental Protection Agency.</a>
              <br /><br />
              Data was manually cleaned from txt and csv files
              and manually integrated into the react components, using
              HighCharts and Tabulator to display it in an easy-to-read,
              accesible format.
              <br /><br />
                This app is hosted by Amazon S3.
                I have carefully used HTML and CSS on the front end,
                as well as JavaScript to create a React App.
                All work has been done on a Macbook Pro 2018.

            </p>
          </div>

        </div>
      </section>
    );
  }
}

export default Colophon;

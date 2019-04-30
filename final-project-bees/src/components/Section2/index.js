/* eslint-disable require-jsdoc */
import React from "react";
import "./style.css";

// Create React component for section 2 (aka "panel 3")

class Section2 extends React.Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <section class="panel-3">
        <div class="grid-3 flex">
          <div class="panel3-header">
            <h1> Here's the deal </h1>
          </div>
          <div class="panel3-body">
            <p> this and this and this </p>
          </div>
          <div class="panel3-image">
            <p>Pollinators transfer pollen and seeds from one flower to another,
                fertilizing the plant so it can grow and produce food.
                Cross-pollination helps at least 30 percent of the world’s
                 crops and 90 percent of our wild plants to thrive.
                https://www.nrdc.org/sites/default/files/bees.pdf</p> <br />
            <p>
                Honeybees are a vital part of our world --
                they influence our food, our economy and our environment.
                However, hives around the world are
                losing on average 20% a year due to Colony Collapse Disorder.
                https://www.epa.gov/pollinator-protection/colony-collapse-disorder<br />
                Colony Collapse Disorder occurs when the worker bees
                completely abandon a hive and leave the queen bee on her own,
                causing the hive to die out. It’s become a world-wide issue
                in the last 10 years
            </p>

          </div>

        </div>
      </section>
    );
  }
}

export default Section2;

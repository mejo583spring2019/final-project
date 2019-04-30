/* eslint-disable require-jsdoc */
import React from "react";
import "./style.css";

// Create React component for section 2 (aka "panel 3")
/** this is a jsdoc comment
 * @return {any}
 */
class Section2 extends React.Component {
  /** this is a jsdoc comment
 * @return {any}
 */
  render() {
    return (
      <section class="panel-3">
        <div class="grid-3 flex">
          <div class="panel3-header">
            <h1> Bees and Colony Collapse Disorder </h1>
          </div>

          <div class="panel3-body">
            <p>Everything you need to know <br />and how you can help</p>
          </div>
          <div class="panel3-image">
            <p>Pollinators transfer pollen and seeds from one flower to another,
                fertilizing the plant so it can grow and produce food.
            <strong>At least 30 percent of the world’s
                 crops and 90 percent of
                 our wild plants</strong> grow because of cross pollination.
            </p>
            <p>
                Honeybees are a vital part of our world -
                they influence our food, our economy and our environment.
                However, according to the USDA, hives around the world are
                losing on average 20% a year due to Colony Collapse Disorder.
              <br /> <br />
              <strong>Colony Collapse Disorder </strong>
                occurs when the worker bees
                completely abandon a hive and leave the queen bee on her own,
                causing the hive to die out.
                It’s become a <strong>world-wide issue </strong>
               in the last 10 years
            </p>
            <h2> So what can we do?</h2>

          </div>

        </div>
      </section>
    );
  }
}

export default Section2;

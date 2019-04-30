/* eslint-disable require-jsdoc */
import React from "react";
import "./style.css";

class Section1 extends React.Component {
  render() {
    return (
      <section class="panel-2">
        <div class="grid-2 flex">
          <div id="panel-2-myth">
            <h1>
                  It’s a widely known fact that pollinators<br />
                  all over the U.S. are rapidly going extinct.
            </h1>

            <p>
              <strong> But what exactly is happening to them?</strong> <br />
              More than $15 billion dollars in
              crops a year need bees for pollination. <br />
              Contrary to popular opinion it’s not necessarily
              directly the cause of pollution or pesticides — <br />
              the culprit is actually a vaguely mysterious condition
              called <strong>Colony Collapse Disorder. </strong>
            </p>

          </div>
          <div id="panel-2-readmore">

          </div>
        </div>
      </section>
    );
  }
}

export default Section1;

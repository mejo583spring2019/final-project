/* eslint-disable require-jsdoc */
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./style.css";

// using react-flippy

class Flip extends React.Component {
  render() {
    return (

      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r}
        // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "400px", height: "400px" }}
        // these are optional style, it is not necessary
      >
        <FrontSide class="pest">
          <div id="pesticide"></div>

        </FrontSide>
        <BackSide
          style={{ backgroundColor: "#BF7575",
          }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
             Studies show that <strong>pesticides</strong> and fungicides,
              such as neonicotinoids,
              could be a leading cause in Colony Collapse Disorder.
          <br />
          <br />
          <br />
          <strong>TO DO: Stop using pesticides in your garden
              and purchase organically grown vegetables</strong>
        </BackSide>

      </Flippy>


    );
  }
}

export default Flip;

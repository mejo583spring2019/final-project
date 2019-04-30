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
        style={{ width: "200px", height: "200px" }}
        // these are optional style, it is not necessary
      >
        <FrontSide class="pest">
          <div id="pesticide"></div>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: "#175852"}}>
             ROCKS
        </BackSide>
      </Flippy>
    );
  }
}

export default Flip;

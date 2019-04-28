import React from "react";
// import { Controller, Scene } from "react-scrollmagic";
import ScrollMagic from "scrollmagic";
// import TweenMax from "gsap/TweenMax";
// import gsap from "gsap";
// import addIndicators from "debug.addIndicators";


// init
const controller = new ScrollMagic.Controller({
  vertical: false,
  globalSceneOptions: {
    triggerHook: "onLeave",
  },
});

// get all slides
const slides = document.querySelectorAll("section.panel");

// create scene for every slide
for (let i = 0; i < slides.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
      .setPin(slides[i])
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
}


/** this is a JSDOC comment*/
class Scroller extends React.Component {
  /** this is a JSDOC comment
     * @return {div}
    */
  render() {
    return (
      <div>
        <section className="panel1">
          <h1>The Simpsons Cast and their Characters</h1>
        </section>
        <section className="panel2">
          <b>TWO</b>
        </section>
        <section className="panel3">
          <b>THREE</b>
        </section>
      </div>
    );
  }
}
export default Scroller;

import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";

// Doesn't allow slides to scroll past max screen-width
// Used the Scroller set-up using ScrollMagic React
const SectionWipesStyled = styled.div`
overflow: visible;
`;

/** sets up the Colophon slide */
class Colophon extends React.Component {
  /** The render() method returns the colophon section as a slide,
     * to fit into the Scroller content.
     * @return {div}
    */
  render() {
    return (
      <div>
        <SectionWipesStyled>
          <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
            <Scene pin>
              <div className="panel colophon">
                <h2>Colophon</h2>
                <h3>Why did I make this site?</h3>
                <p>As a senior multimedia major, I created this final project
                as a demonstration of some of the skills we have been
                learning in our advanced multimedia class.
                 I always like to choose fun and personal topics
                 for my projects, and like to play around with
                  a very cartoon-y style.
                 This project demonstrates some understanding
                of the basics of data visualization,
                using the tool <a href="https://www.highcharts.com/docs/chart-and-series-types/packed-bubble-charts
                ">High Charts,</a> as well as
                 some structuring tools such as <a href="https://bitworking.github.io/react-scrollmagic/section-wipes
                ">Scroll Magic</a> and <a href="https://reactjs.org/">React</a> to format everything. To lint my code, I used <a href="https://eslint.org/">ESLint </a>
                  and <a href="https://github.com/google/eslint-config-google"> Eslint Config Google</a>. To check my code was linted correctly to fit the class standards, I ran it through <a href="https://circleci.com/">Circle CI</a>.
                <br/><br/>
                I found all of my Simpsons data from TVMaze.com,
                     from their <a href="http://api.tvmaze.com/shows/83/cast">API</a>,
                      which gave me a data file with
                       cast information and the corresponding characters
                        they play. Additionally, to find the number of
                        appearances
                         per character in the series, I took a look at
                          their <a href="http://www.tvmaze.com/shows/83/
                           the-simpsons/characters">website
                          show page for Simpsons characters</a>,
                            and then manually entered the appearances
                             into my chart
                             data (since it was not included in the
                              API file I used
                              earlier).
                <br/><br/>
                To get the data into the application, I did a series of
                     programmatic data cleanup, pulling from the url into
                      a data file, which I then manually cleaned up and
                       pasted into my HighChart split packed bubble map.
                        For the number of appearances for each character,
                         I manually migrated each appearance count to my
                          High Charts data (because it wasn't included
                           in the API).
                <br/><br/>
                To structure the assignment, I used the extremely helpful
                <a href="https://reactjs.org/"> React</a> library.
                Alongside the React base, I used various components,
                 such as <a href="https://www.highcharts.com/blog/post/
                 highcharts-wrapper-for-react-101/">HighchartsReact</a>,
                a carousel called <a href="https://react-slick.neostack.
                com/docs/example/responsive">Responsive Slider </a>from
                <a href="https://www.npmjs.com/package/react-slick"> react-slick</a>,
                 and the <a href="https://www.npmjs.
                 com/package/react-scrollmagic">React version of Scroll
                 Magic</a>.
                For styling, I mainly used flexbox and <a href=
                  "https://www.npmjs.com/package/react-scrollmagic">
                ScrollMagic (for natural slide wipes)</a>.
                <br/>
                <br/>
               I’m using a 2015 MacBook, with VSCode
                     for all code editing.
                <br/>
                <br/>
                For the Simpsons svgs, I actually made them
                     myself using Adobe Illustrator,
                   looking at some Simpsons photos for reference.
                   The photos that I used for the cast
                   members were also retrieved from TVMaze.com's
                <a href="http://api.tvmaze.com/shows/83/cast"> API</a>.
                   Additionally, I used font-awesome for an <a
                  href="https://fontawesome.com/icons/angle-down?style=solid">svg arrow </a> for scrolling.
                <br/>
                <br/>
                   This app was deployed using <a href="https://github.com/sivonne/simpsons-app">Github Pages.</a>
                   It looks best viewed in full screen on a computer.
                </p>
              </div>
            </Scene>
          </Controller>
        </SectionWipesStyled>
      </div>
    );
  }
}
export default Colophon;

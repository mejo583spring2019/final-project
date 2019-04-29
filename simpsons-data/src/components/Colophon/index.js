import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";


const SectionWipesStyled = styled.div`
  overflow: hidden;
`;


/** this is a JSDOC comment*/
class Colophon extends React.Component {
  /** this is a JSDOC comment
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
                <h4>Why did you make this site?</h4>
                <p>As a senior multimedia major, I created this final project
                as a demonstration of some of the skills we have been
                learning in our advanced multimedia class.
                 This project demonstrates some understanding
                of the basics of data visualization,
                using the tool High Charts, as well as
                 some structuring tools such as Scroll
                  Magic and React as a framework.</p>

                <h4>Where did the data come from?</h4>
                <p>I found all of my Simpsons data from TVMaze.com,
                     from their API, which gave me a data file
                      (http://api.tvmaze.com/shows/83/cast) with
                       cast information and the corresponding characters
                        they play. Additionally, to find the number of
                        appearances
                         per character in the series, I took a look at
                          their website
                          show page for Simpsons characters
                           (http://www.tvmaze.com/shows/83/
                           the-simpsons/characters),
                            and then manually entered the appearances
                             into my chart
                             data (since it was not included in the
                              API file I used
                              earlier).</p>

                <h4>How did you get the data into the app?</h4>
                <p>To get the data into the application, I did a series of
                     programmatic data cleanup, pulling from the url into
                      a data file, which I then manually cleaned up and
                       pasted into my HighChart split packed bubble map.
                        For the number of appearances for each character,
                         I manually migrated each appearance count to my
                          High Charts data.</p>

                <h4>What tools / libraries / frameworks are you using?</h4>
                <h4>What type of computer/editing software are you using?</h4>
                <p>I’m using a 2015 MacBook, with VSCode
                     for all code editing.</p>
                <h4>Where'd you get the images on the site?</h4>
                <p>For the Simpsons svgs, I actually made them
                     myself using Adobe Illustrator,
                   looking at some Simpsons photos for reference.
                   The photos that I used for the cast
                   members were also retrieved from TVMaze.com's
                   API<a href="http://api.tvmaze.com/shows/83/cast">API</a></p>
              </div>
            </Scene>
          </Controller>
        </SectionWipesStyled>
      </div>
    );
  }
}
export default Colophon;

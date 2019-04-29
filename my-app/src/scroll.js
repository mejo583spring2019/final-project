import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Chart from "./highchart.js";
import background from "./img/background.png";
import Barchart from "./barchart.js";


const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: inline;
    overflow: visible;
    top: 50%;
    font-size: 12px;
  }
  
  .panel.first {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-postion: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
  }

  .panel.grey {
    background-color: #343434;
    margin-bottom: 300px;
    height: 120vh;
  }
  
  .panel.graphic {
    background-color: #FCDFAF;
    margin-bottom: 300px;
    padding-top: 40px;
  }
  
  .panel.blue {
    background-color: #6D90A3;
    height: 120vh !important;
  }

  .panel.red {
    background-color: rgba(151, 69, 70, 1);
    height: 120vh !important;
  }

  #got{
      padding-top: 12%;
      max-width: 70%;
  }

  #characters{
    width: 70%;
    height: auto;
    max-width: 800px;
  }

  #frontTitle{
      font-family: Times New Roman;
      font-size: 70px;
      virtical-align: bottom;
      margin-bottom: 3px;
      padding-bottom: 3px;
      padding-top: 80px;
      margin-top: 10%;
      color: black;
  }

  #heroIntro{
    font-family: Times New Roman;
    font-size: 3vmax;
    padding-top: 25px;
    padding-left: 13%;
    padding-right: 13%;
    padding-bottom: 1px;
    margin-bottom: 1px;
    color: #fffaf0;
  }

  @media only screen and (max-width: 520px) {
    #chartText{
        font-size: 16px !important;
      }
      #frontTitle{
        font-size: 60px;
        margin-bottom: 3px;
        padding-bottom: 3px;
        padding-top: 70%;
        margin-top: 19%;
        color: black;
    }
    #got{
        padding-top: 25%;
        max-width: 90%;
    }
    .colophon{
        font-size: 14px !important;
        padding-left: 2% !important;
        padding-right: 2%!important;
    }
  }


  #chartText{
    font-family: Times New Roman;
    font-size: 20px;
    padding-top: 20px;
    margin-top: 1px;
    padding-left: 10%;
    padding-right: 10%;
    color: #fffaf0; 
    text-align: left;
  }

  #bubble {
      padding-top: 5%;
  }

  .colophon{
      color: white;
      font-size: 20px;
      text-align: left;
      padding-left: 6%;
      padding-right: 6%;
      font-family: Times New Roman;
  }

  #coloTitle {
      color: white;
      padding-top: 1%;
      font-family: Times New Roman;
      padding-bottom: 5px;
      margin-bottom: 5px;
  }


`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel first">
          <img id="got" src={require("./img/got.png")}
            alt="Game of Thrones logo"></img>
          <p id="frontTitle">Data visualization</p>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel grey">
          <p id="heroIntro">All of our Game of Thrones heroes are deadly,
          but who is the most dangerous?</p>
          <p id="chartText">The following charts demonstrate which heroes
           and houses have been the most ruthless in their quest for the
           Iron Throne. <br/> <br/>In the first chart, Deadliest Houses,
           murders are tallied according to deaths the characters directly
           inflicted. Deaths characters "ordered" or deaths of people who
           were not named characters in the TV show script do not count.
           Click and drag the characters between houses if you disagree with the
           original placement (for example, you may want to move Jon Snow
           out of House Stark...). <br/><br/> In the second chart, Deadliest
           Characters, murders are tallied according to all on-screen kills
           as well as prominent off-screen kills that are confirmed or assumed.
          <br/> <br/><strong> WARNING: </strong> These charts are updated
           through season 8 episode 2 and they do contain spoilers!</p>
          <img id="characters"
            src={require("./img/characters.png")}
            alt="Game of Thrones characters artwork"></img>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel graphic"> <Chart></Chart> </div>
      </Scene>
      <Scene pin>
        <div className="panel blue"> <Barchart></Barchart></div>
      </Scene>
      <Scene pin>
        <div className="panel red">
          <h2 id="coloTitle">Colophon</h2>
          <p class="colophon"> This site was created for the purposes of entertainment
            and information regarding the HBO TV series “Game of Thrones”
            based on the “Song of Ice and Fire” book series written by
            George R. R. Martin. None of the data displayed on this site
            was provided by HBO or other official Game of Thrones
            affiliates — it was fan-aggregated and maintained.</p>
          <p class="colophon"> The data used in the first chart, Deadliest Houses, came
            from Jeffery Lancaster’s Game of Thrones database. I manually
            copied over the data to my charts by looking at his
            characters.json file. </p>
          <p class="colophon"> The data from the second chart, Deadliest Characters,
            came from a Washington Post article that discussed the deaths
            of Game of Thrones characters. I manually copied the information
            from the article into my chart.</p>
          <p class="colophon">This website was built using HTML, CSS, JavaScript, Node.js
            and React. </p>
          <p class="colophon">I am using ScrollMagic to create this page’s section wipes.
            I used the npm package react-scrollmagic to implement
            ScrollMagic. </p>
          <p class="colophon">I am using Highcharts to render both of my charts. I implemented
            Highcharts using three npm packages — highcharts, highcharts-more,
            and highcharts-react-official.</p>
          <p class="colophon">I created this website in Visual Studio Code on a 2016
            MacBook Pro. </p>
          <p class="colophon">While this website and its charts were intended to be viewed
            on all screen-sizes, viewing it on a desktop using a modern browser
            will deliver the best experience. </p>

        </div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;

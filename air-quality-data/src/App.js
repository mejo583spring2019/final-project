import React, { Component } from "react";
import Map from "././components/Map";
import LineChart from "./components/LineChart";
import "./index.css";
import Colophon from "./components/Colophon";
import { HashRouter as Router, Route, Link } from "react-router-dom";

/**
 * Returns the app  containing a Map, LineChart and Colophon as well as jsx text
 * @return {any}.
 */
function Index() {
  return (
    <div id="main-container">
      <menu></menu>
      <h1>Air Quality and Car Ownership</h1>
      <div className="body-copy">
        <p>
          It’s no secret that the air we breathe probably isn’t good for us.
          Air quality common news subject, especially Carbon Dioxide
          and its impact on climate change.
          But, there’s a lot more to the air in our lungs than just air.
          <br />
          Imagine looking down a bustling street in New York
          city on a warm summer day. Cars and people are flying
           by, the sun is shining and that lovely city haze
           turns the sky a faint orange color.
          <br />
          As it turns out,
           the haze many city-dwellers are so familiar with,
           is formed by a combination of gases and particles
           in the air created mostly by industry and
           transportation. Most of these particles fall
           into the category of particulate matter.
           According to the EPA, particulate matter
           comes in two official sizes, PM10 and PM2.5.
           PM10 is larger dust particles over 10 micrometers
           thick, and comes from things like construction
           or dirt and doesn’t pose a significant threat to
           health. <br />PM2.5 however, is small enough that,
        according to the WHO, it can get deep
        into your lungs and even your bloodstream.
        This can cause serious health problems
         such as asthma, irregular heartbeat and
         premature death in those with prior conditions.
         While no level of these compounds is safe, the
         WHO suggests a yearly average below 10 µg/m3 as
         the baseline for healthy living.
          <br />
          The map below shows the average levels of
           PM2.5 in µg/m3 in 2016 across the globe.
        </p>
      </div>
      <Map />
      <div className="body-copy">
        <p>
          Since transportation is one of the factors that
          drives PM2.5 emission, one way to improve air
          quality is to reduce the number of cars on the
           road. For the US and many other countries,
           this has been deemed a very difficult task,
           while for others change seems to occur quickly.
          <br />Below, we compare the rate of household car
           ownership over a 10 year period, with the
           upper percentile of PM2.5 measured that year
           in Raleigh, NC, USA and Copenhagen, Denmark.
        </p>
      </div>
      <LineChart />
      <div className="body-copy">
        <p>
          Denmark has been deemed the bike capital of the
          world and in 2016, the number of bikes out-numbered
          the number of cars on the road. However, despite
          rising bike ownership rate, car ownership rates
          in the Danish capital rose about 1 percent between
           2007 and 2017. Despite this, maximum PM2.5 levels
            have dropped by about half. This suggests a
             reduction in car usage.
          <br />
          On par with the rest of the country, Raleigh,
           a city smaller than Copenhagen, shows lower
            overall PM2.5 levels, but much higher rates
             of car ownership. Raleigh as also reduced
              PM2.5 levels by nearly half, despite a slight
               increase in car ownership rates, suggesting
                the PM2.5 that was removed came from sources
                 other than transportation or was the result
                  of better vehicle emission standards.
          <br />
          The transition from a heavy reliance on fossil
           fuels to green energy will not be an easy one,
            and as this case study shows, even countries
             that are comparatively more sustainable than
              other still have room for improvement.
        </p>
      </div>
    </div >
  );
}

/**
 * Returns the app  containing a Map, LineChart and Colophon as well as jsx text
 * @return {any}.
 */
class App extends Component {
  /**
 * Render  renders the index page with links
 * @return {any}.
 */
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="menu-container">
              <li className="menu-item">
                <Link to="/">Main</Link>
              </li>
              <li className="menu-item">
                <Link to="/colophon">Colophon</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/colophon" exact component={Colophon} />
        </div>
      </Router>

    );
  }
}


export default App;

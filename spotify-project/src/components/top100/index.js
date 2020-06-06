import React, { Component } from "react";
import Top100Table from "../Top100Table";

import "./styles.css";

/**
 * creates Top100 Component
 */
class Top100 extends Component {
  /**
   * renders Top100
   * @return {object} Top100 Component
   */
  render() {
    return (
      <div id="Top100Container">
        <h1 id="Top100Title">
          TOP 100
        </h1>
        <div id="Top100TitleUnderline"></div>
        <p id="Top100Intro">
          The chart below lists Spotify's <span id="IntroSpan">top
          100 </span>songs of 2017,
          as well as ratings for various audio features.
        </p>
        <p id="Top100Intro">
          For clarification on the meaning of certain
          audio features, refer to the legend below.
        </p>
        <div id="Top100TableContainer">
          <Top100Table></Top100Table>
        </div>
        <div id="Top100Legend">
          <p id="LIS" className="LegendItem"><span className="LegendSpan">
          Danceability: </span>Danceability describes how suitable a track is
          for dancing based on a combination of musical elements including
          tempo, rhythm stability, beat strength, and overall regularity.
          A value of 0.0 is least danceable and 1.0 is most danceable.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Energy: </span>Energy is a measure from 0.0 to 1.0 and represents
           a perceptual measure of intensity and activity. Typically,
           energetic tracks feel fast, loud, and noisy. For example, death
           metal has high energy, while a Bach prelude scores low on the
           scale. Perceptual features contributing to this attribute
           include dynamic range, perceived loudness, timbre,
           onset rate, and general entropy.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Key: </span>The key the track is in. Integers map to pitches
          using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭,
          2 = D, and so on.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Loudness: </span>The overall loudness of a track in decibels
          (dB). Loudness values are averaged across the entire track
          and are useful for comparing relative loudness of tracks.
          Loudness is the quality of a sound that is the primary
          psychological correlate of physical strength (amplitude).
          Values typical range between -60 and 0 db.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Mode: </span>Mode indicates the modality (major or minor) of a
          track, the type of scale from which its melodic content is
          derived. Major is represented by 1 and minor is 0.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Speechiness: </span>Speechiness detects the presence of spoken
          words in a track. The more exclusively speech-like the recording
          (e.g. talk show, audio book, poetry), the closer to 1.0 the
          attribute value. Values above 0.66 describe tracks that are
          probably made entirely of spoken words. Values between 0.33
          and 0.66 describe tracks that may contain both music and
          speech, either in sections or layered, including such cases
          as rap music. Values below 0.33 most likely represent music
          and other non-speech-like tracks.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Acousticness: </span>A confidence measure from 0.0 to 1.0
          of whether the track is acoustic. 1.0 represents high
          confidence the track is acoustic.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Instrumentalness: </span>Predicts whether a track contains
          no vocals. "Ooh" and "aah" sounds are treated as instrumental
          in this context. Rap or spoken word tracks are clearly "vocal".
          The closer the instrumentalness value is to 1.0, the greater
          likelihood the track contains no vocal content. Values above
          0.5 are intended to represent instrumental tracks, but
          confidence is higher as the value approaches 1.0.
          </p>
          <p className="LegendItem"><span className="LegendSpan">
          Liveness: </span>Detects the presence of an audience in
          the recording. Higher liveness values represent an increased
          probability that the track was performed live. A value above
          0.8 provides strong likelihood that the track is live.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Valence: </span>A measure from 0.0 to 1.0 describing the
          musical positiveness conveyed by a track. Tracks with high
          valence sound more positive (e.g. happy, cheerful, euphoric),
          while tracks with low valence sound more negative (e.g. sad,
          depressed, angry).</p>
          <p className="LegendItem"><span className="LegendSpan">
          Tempo: </span>The overall estimated tempo of a track in beats
          per minute (BPM). In musical terminology, tempo is the speed
          or pace of a given piece and derives directly from the average
          beat duration.</p>
          <p className="LegendItem"><span className="LegendSpan">
          Duration: </span>The duration of the track in milliseconds.</p>
          <p id="LIF" className="LegendItem"><span className="LegendSpan">
          Time Signature: </span>An estimated overall time signature of a
          track. The time signature (meter) is a notational convention to
          specify how many beats are in each bar (or measure).</p>
        </div>
        <div id="PadDiv"></div>
      </div>
    );
  }
}

export default Top100;

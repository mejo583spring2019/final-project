import React, { Component } from "react";
import YouTube from "react-youtube";

/** creates a new class, Youtube, that makes a Youtube iframe on page
 * @return {any}
 */
class Youtube extends Component {
  /** when the window is ready accesses player
   * @event Youtube#_onReady
   * @type {object}
   */
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  /** renders the iframe
   * @return {Object}
  */
  render() {
    const opts = {
      height: "500",
      width: "877",
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <YouTube
        videoId="kl39KHS07Xc"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}

export default Youtube;



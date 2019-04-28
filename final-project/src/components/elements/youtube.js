import React, { Component } from 'react';
import YouTube from 'react-youtube';



class Youtube extends Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    render() {
        const opts = {
          height: '500',
          width: '877',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
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



// youtube id: , for UBI video
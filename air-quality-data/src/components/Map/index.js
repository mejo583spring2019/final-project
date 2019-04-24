import React, { Component } from 'react';
import * as d3 from "d3";


class Map extends Component {
    el = React.reateRef();

    componentDidMount() {

    }


    render() {
        return (
            <div>
                I'm a map
                <div id="map-div" ref={el => (this.el = el)}></div>
            </div>
        );
    }
}

export default Map;

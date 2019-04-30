import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Draggable from '@shopify/draggable';
import Vibrant from 'node-vibrant';

class top20 extends Component {
    render() {
        return (
            <div>
                <h2>These are the Rolling Stone's Top 5 Albums from 2012</h2>
                <img src="https://live.staticflickr.com/7313/8903094536_908957836d.jpg"
                    alt="Sgt.Pepper's Lonely Hearts Club Bamd" />
                <img src="https://live.staticflickr.com/892/41240190541_6c733364e0_b.jpg"
                    alt="Sgt.Pepper's Lonely Hearts Club Bamd" />
                <img src="https://live.staticflickr.com/2490/4195129843_d336bbc46b_z.jpg"
                    alt="The Beatles - Revolver (Remastered)" />
                <img src="https://live.staticflickr.com/5178/5422211332_d0cdac425b_b.jpg"
                    alt="The Beatles - Revolver (Remastered)" />
                <img src="http://1.bp.blogspot.com/-leiitqqVAzA/TsirciMMoII/AAAAAAAABSo/XnJhQlwoHts/s320/220px-Rubber_Soul.jpg"
                    alt="Sgt.Pepper's Lonely Hearts Club Bamd" />
            </div>
        );

    }
}
export default top20;
console.log(Vibrant);
console.log(Draggable);
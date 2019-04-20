import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import { Controller, Scene } from 'react-scrollmagic';

import "./styles.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

var colors = [
    { color: "#140d0a" },
    { color: "#452f1f" },
    { color: "#6c512c" },
    { color: "#b19255" },
    { color: "#efce6a" }
];

var dataEntries = [
    { y: 2200000000, label: "Facebook", color: colors[0].color },
    { y: 1800000000, label: "YouTube", color: colors[1].color },
    { y: 800000000, label: "Instagram", color: colors[2].color },
    { y: 563000000, label: "Qzone", color: colors[3].color },
    { y: 376000000, label: "Weibo", color: colors[4].color }
];

class BarChart extends Component {
    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
    render() {
        const options = {
            animationEnabled: true,
            colorSet: "crimeShade",
            theme: "light2",
            backgroundColor: "transparent",
            title: {
                text: "Most Popular Social Networking Sites"
            },
            axisX: {
                title: "Social Network",
                reversed: true,
            },
            axisY: {
                title: "Monthly Active Users",
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: dataEntries
            }]
        }


        return (
            <div>
                <div>
                    <div className="fixedChart">
                        <CanvasJSChart options={options}
                        /* onRef={ref => this.chart = ref} */
                        />
                        <div class='iconPos icon-scroll'></div>
                    </div>
                </div>

                <div className="panel2 white">
                </div>

                <div className="panel blue absolutePos">
                    <span className="right box">
                        <h2>Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                            gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                            cum mnesarchum inciderint philosophia ea. Ex libris possim
                            officiis sea, ad sit viris legere. Habeo utroque accusam mei
                            et, ut vis unum munere. At vix appareat sadipscing reformidans,
                            et pri diam melius, eu sapientem similique maiestatis vim. Te
                            reque dolor quo.
                        </p>
                    </span>
                    <span className="left box">
                        <h2>Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                            gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                            cum mnesarchum inciderint philosophia ea. Ex libris possim
                            officiis sea, ad sit viris legere. Habeo utroque accusam mei
                            et, ut vis unum munere. At vix appareat sadipscing reformidans,
                            et pri diam melius, eu sapientem similique maiestatis vim. Te
                            reque dolor quo.
                        </p>
                    </span>
                    <span className=" right box">
                        <h2>Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                            gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                            cum mnesarchum inciderint philosophia ea. Ex libris possim
                            officiis sea, ad sit viris legere. Habeo utroque accusam mei
                            et, ut vis unum munere. At vix appareat sadipscing reformidans,
                            et pri diam melius, eu sapientem similique maiestatis vim. Te
                            reque dolor quo.
                        </p>
                    </span>
                    <span className="panel3"></span>
                </div>

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default BarChart;
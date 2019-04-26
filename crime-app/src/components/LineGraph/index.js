import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

import "./styles.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataEntries = [
    { x: 1, y: 64 },
    { x: 2, y: 61 },
    { x: 3, y: 64 },
    { x: 4, y: 62 },
    { x: 5, y: 64 },
    { x: 6, y: 60 },
    { x: 7, y: 58 },
    { x: 8, y: 59 },
    { x: 9, y: 53 },
    { x: 10, y: 54 },
    { x: 11, y: 61 },
    { x: 12, y: 60 },
    { x: 13, y: 55 },
    { x: 14, y: 60 },
    { x: 15, y: 56 },
    { x: 16, y: 60 },
    { x: 17, y: 59.5 },
    { x: 18, y: 63 },
    { x: 19, y: 58 },
    { x: 20, y: 54 },
    { x: 21, y: 59 },
    { x: 22, y: 64 },
    { x: 23, y: 59 }
]

class LineChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            backgroundColor: "transparent",
            title: {
                text: "Bounce Rate by Week of Year"
            },
            axisY: {
                title: "Bounce Rate",
                includeZero: false,
                suffix: "%"
            },
            axisX: {
                title: "Week of Year",
                color: "pink",
                prefix: "W",
                interval: 2
            },
            data: [{
                type: "line",
                toolTipContent: "Week {x}: {y}%",
                markerColor: "#452f1f",
                lineColor: "#b19255",
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
                    </div>
                </div>

                <div className="panel2 white"></div>

                <div className="panel blue absolutePos">
                    <span className="right box">
                        Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                        gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                        cum mnesarchum inciderint philosophia ea. Ex libris possim
                        officiis sea, ad sit viris legere. Habeo utroque accusam mei
                        et, ut vis unum munere. At vix appareat sadipscing reformidans,
                        et pri diam melius, eu sapientem similique maiestatis vim. Te
                        reque dolor quo.
                    </span>
                    <span className="left box">
                        Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                        gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                        cum mnesarchum inciderint philosophia ea. Ex libris possim
                        officiis sea, ad sit viris legere. Habeo utroque accusam mei
                        et, ut vis unum munere. At vix appareat sadipscing reformidans,
                        et pri diam melius, eu sapientem similique maiestatis vim. Te
                        reque dolor quo.
                    </span>
                    <span className=" right box">
                        Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                        gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                        cum mnesarchum inciderint philosophia ea. Ex libris possim
                        officiis sea, ad sit viris legere. Habeo utroque accusam mei
                        et, ut vis unum munere. At vix appareat sadipscing reformidans,
                        et pri diam melius, eu sapientem similique maiestatis vim. Te
                        reque dolor quo.
                    </span>
                    <span className="panel3"></span>
                </div>

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default LineChart;                           
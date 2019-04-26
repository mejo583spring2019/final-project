import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import byState from "../../data/byState/byState";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import "./styles.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
    chartData1 = this.getAllData(byState);
    chartData2 = this.getTop5Data(byState);
    chartData3 = this.getBottom5Data(byState);

    getAllData(data) {
        let chartData = [];
        var color = [
            {
                color: "#F3E6C3",
            },
            {
                color: "#876933",
            },
            {
                color: "#AF9154",
            }
        ]

        var j = 0;
        for (var i = 0; i < data.length; i++) {
            chartData[i] = {
                y: (data[i].total_crime / data[i].population) * 100,
                label: data[i].state,
                color: color[j].color,
            }
            if (j === color.length - 1) {
                j = 0;
            } else {
                j++;
            }

            chartData[i].y = parseFloat(Number.parseFloat(chartData[i].y).toFixed(2));
        }
        return chartData;
    }

    getTop5Data(data) {
        let chartData = [];

        const top5 = Object.values(data)
            .sort((a, b) => ((b.total_crime / b.population) * 100) - ((a.total_crime / a.population) * 100))
            .slice(0, 10);

        console.log(top5);

        for (var i = 0; i < top5.length; i++) {
            chartData[i] = {
                y: (top5[i].total_crime / top5[i].population) * 100,
                label: top5[i].state,
            }
            chartData[i].y = parseFloat(Number.parseFloat(chartData[i].y).toFixed(2));
        }
        return chartData;
    }

    getBottom5Data(data) {
        let chartData = [];

        const top5 = Object.values(data)
            .sort((a, b) => ((a.total_crime / a.population) * 100) - ((b.total_crime / b.population) * 100))
            .slice(0, 10);

        console.log(top5);

        for (var i = 0; i < top5.length; i++) {
            chartData[i] = {
                y: (top5[i].total_crime / top5[i].population) * 100,
                label: top5[i].state,
            }
            chartData[i].y = parseFloat(Number.parseFloat(chartData[i].y).toFixed(2));
        }
        return chartData;
    }

    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }



    render() {
        const options1 = {
            animationEnabled: true,
            backgroundColor: "transparent",
            toolTip: {
                fontColor: "red",
            },
            data: [
                {
                    type: "column",
                    dataPoints: this.chartData1,
                }
            ]
        }

        const options2 = {
            animationEnabled: true,
            colorSet: "crimeShade",
            theme: "light2",
            backgroundColor: "transparent",
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
                dataPoints: this.chartData2
            }]
        }

        const options3 = {
            animationEnabled: true,
            colorSet: "crimeShade",
            theme: "light2",
            backgroundColor: "transparent",
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
                dataPoints: this.chartData3
            }]
        }


        return (
            <div className="backgroundColor">
                <div>
                    <h1>Crime By State</h1>
                    <div className="maxWidth">
                        <p>
                            Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                            gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                            cum mnesarchum inciderint philosophia ea. Ex libris possim
                            officiis sea, ad sit viris legere. Habeo utroque accusam mei
                            et, ut vis unum munere. At vix appareat sadipscing reformidans,
                            et pri diam melius, eu sapientem similique maiestatis vim. Te
                            reque dolor quo.
                        </p>
                    </div>
                </div>

                <Tabs defaultActiveKey="profile1" transition={false} id="noanim-tab-example">
                    <Tab eventKey="profile1" title="All States" unmountOnExit="true">
                        <h2>Property Crime Rate By State</h2>
                        <CanvasJSChart options={options1} />
                        <div className="maxWidth">
                            <p>
                                Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                                gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                                cum mnesarchum inciderint philosophia ea. Ex libris possim
                                officiis sea, ad sit viris legere. Habeo utroque accusam mei
                                et, ut vis unum munere. At vix appareat sadipscing reformidans,
                                et pri diam melius, eu sapientem similique maiestatis vim. Te
                                reque dolor quo.
                            </p>
                        </div>
                    </Tab>
                    <Tab eventKey="profile2" title="Worst States" unmountOnExit="true">
                        <h2>Worst States for Property Crime</h2>
                        <CanvasJSChart options={options2} />
                        <p>
                            Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                            gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                            cum mnesarchum inciderint philosophia ea. Ex libris possim
                            officiis sea, ad sit viris legere. Habeo utroque accusam mei
                            et, ut vis unum munere. At vix appareat sadipscing reformidans,
                            et pri diam melius, eu sapientem similique maiestatis vim. Te
                            reque dolor quo.
                        </p>
                    </Tab>
                    <Tab eventKey="profile3" title="Best States" unmountOnExit="true">
                        <h2>Best States for Property Crime</h2>
                        <CanvasJSChart options={options3} />
                        <p>
                            Lorem ipsum dolor sit amet, stet minimum at pro, est senserit
                            gubergren in, iusto erroribus mel ad. Legimus deserunt quo et,
                            cum mnesarchum inciderint philosophia ea. Ex libris possim
                            officiis sea, ad sit viris legere. Habeo utroque accusam mei
                            et, ut vis unum munere. At vix appareat sadipscing reformidans,
                            et pri diam melius, eu sapientem similique maiestatis vim. Te
                            reque dolor quo.
                        </p>
                    </Tab>
                </Tabs>

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default BarChart;
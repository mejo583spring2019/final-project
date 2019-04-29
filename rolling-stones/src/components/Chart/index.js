import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Chart from "chart.js"
import albumList from "../../data/index";

class Genre extends Component {
    render() {

        var numFolk = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Folk');
        }, 0);
        var numRock = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Rock');
        }, 0);
        var numJazz = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Jazz');
        }, 0);
        var numHipHop = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Hip Hop');
        }, 0);
        var numElectronic = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Electronic');
        }, 0);
        var numPop = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Pop');
        }, 0);
        var numBlues = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Blues');
        }, 0);
        var numClassical = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Classical');
        }, 0);
        var numReggae = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Reggae');
        }, 0);
        var numLatin = albumList.reduce(function (n, album) {
            return n + (album.top_genre === 'Latin');
        }, 0);

        var ctx = 'myChart';
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    "Folk", "Rock", "Jazz", "Hip Hop", "Electronic",
                    "Pop", "Blues", "Classical", "Reggae", "Latin"
                ],

                datasets: [{
                    label: 'Amount of Albums from Each Genre',
                    data: [numFolk, numRock, numJazz, numHipHop,
                        numElectronic, numPop, numBlues, numClassical,
                        numReggae, numLatin],
                    backgroundColor: 'rgb(242, 12, 54)',
                    borderColor: 'rgb(1, 31, 38)',
                    borderWidth: 1

                }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        return (
            <canvas id="myChart" width="400" height="400"
                aria-label="This chart shows the amount of albums on the top 500 for each genre." >
            </canvas>
        );
    }
}
export default Genre;



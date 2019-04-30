import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Chart from "chart.js"
import albumList from "../../data/index";


function albumTree(fullData) {
    const byGenre = {};

    fullData.forEach((r) => {
        const strGenre = r.top_genre;
        let genreData = byGenre[strGenre];

        if (genreData === undefined) {
            genreData = {};
        }

        const strAlbum = r.album;
        let albumData = genreData[strAlbum];

        if (albumData === undefined) {
            albumData = {};
        }

        albumData[r.artist] = r.number;
        genreData[strAlbum] = albumData;

        byGenre[strGenre] = genreData;



    });
    return byGenre;
}



class Genre extends Component {
    render() {

        console.log(albumTree(albumList)['Folk']);



        var numFolk = Object.keys(albumTree(albumList)['Folk']).length;
        var numRock = Object.keys(albumTree(albumList)['Rock']).length;
        var numJazz = Object.keys(albumTree(albumList)['Jazz']).length;
        var numHipHop = Object.keys(albumTree(albumList)['Hip Hop']).length;
        var numElectronic = Object.keys(albumTree(albumList)['Electronic']).length;
        var numPop = Object.keys(albumTree(albumList)['Pop']).length;
        var numBlues = Object.keys(albumTree(albumList)['Blues']).length;
        var numClassical = Object.keys(albumTree(albumList)['Classical']).length;
        var numReggae = Object.keys(albumTree(albumList)['Reggae']).length;
        var numLatin = Object.keys(albumTree(albumList)['Latin']).length;

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
            < canvas id="myChart" width="400" height="400"
                aria-label="This chart shows the amount of albums on the top 500 for each genre." >
            </ canvas>);

    }
}
export default Genre;



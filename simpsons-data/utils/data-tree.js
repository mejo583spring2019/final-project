// this page was modelled after the Week 12 HW 1 videos on YouTube

const fetch = require("node-fetch");

const dataURL = "http://api.tvmaze.com/shows/83/cast"
    ;
const numberOfCharactersPlayed = {};


function makeTree(fullData) {
  fullData.forEach((r) => {
    console.log("the current record is", r);
    byYear[r.year] = r;
  });
}
return numberOfCharactersPlayed;

function main() {
  console.log(dataURL);
  fetch(dataURL)
      .then((res) => res.json())
      .then((json) => makeTree(json));
}
main();

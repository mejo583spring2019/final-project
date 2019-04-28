// this page was modelled after the Week 12 HW 1 videos on YouTube
const fs = require("fs");
// const Chart = require("chart.js");
const fetch = require("node-fetch");
// var bubbleChart = new Chart(ctx);
const dataURL = "http://api.tvmaze.com/shows/83/cast"
  ;
const personName = {};

/** this is a JSDOC comment
 * @param {any} fullData
 * @return {string}
*/
function makeTree(fullData) {
  fullData.forEach((r) => {
    const strPerson = String(r.person.name);
    // const strCharacter = String(r.character.name);

    let personData = personName[r.person.name];
    if (personData === undefined) {
      personData = {};
    }
    let makeData = personData[r.character.name];
    if (makeData === undefined) {
      makeData = {};
    }
    // should do r.id? from video
    // makeData[r.character.url] = r.character.image.medium;
    
    personData[r.character.name] = makeData;

    personName[strPerson] = personData;
  });
  //   console.log(personName);
  return personName;
  // "{name:" + personName + "{data[{ name" + personData + "value: 1" + "}]";
}

/** this is a JSDOC comment
 * @param {any} filename
 * @param {any} fullData
*/
function writeJSONFile(filename, fullData) {
  const data = makeTree(fullData);
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(filename, jsonData, "utf8");
}


/** this is a JSDOC comment */
function main() {
  process.stdout.write(`Loading data from ${dataURL}\n`);
  const filename = "public/byPersonName.json";
  fetch(dataURL)
      .then((res) => res.json())
      .then((json) => writeJSONFile(filename, json));
  process.stdout.write(`Data written to ${filename}\n`);
}
main();

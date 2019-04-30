// This page was modelled after the Week 12 HW 1 videos on YouTube
// For help writing json to a file, I used https://nodejs.org/api/fs.html for reference
const fs = require("fs");
const fetch = require("node-fetch");
const dataURL = "http://api.tvmaze.com/shows/83/cast";
const personName = {};

/** this is a JSDOC comment
 * @param {any} fullData
 * @return {string}
*/
function makeTree(fullData) {
  fullData.forEach((r) => {
    const strPerson = String(r.person.name);
    let personData = personName[r.person.name];
    if (personData === undefined) {
      personData = {};
    }
    let makeData = personData[r.character.name];
    if (makeData === undefined) {
      makeData = {};
    }
    personData[r.character.name] = makeData;
    personName[strPerson] = personData;
  });
  return personName;
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

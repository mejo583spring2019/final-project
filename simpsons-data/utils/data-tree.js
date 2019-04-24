// this page was modelled after the Week 12 HW 1 videos on YouTube
const fs = require("fs");

const fetch = require("node-fetch");

const dataURL = "http://api.tvmaze.com/shows/83/cast"
    ;
const personName = {};
//

/** this is a JSDOC comment
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

    makeData[r.character.url] = r.character.image.medium; // should do r.id? from video
    personData[r.character.name] = makeData;

    personName[strPerson] = personData;
  });
//   console.log(personName);
  return personName;
}


function writeJSONFile(fullData) {
  const data = makeTree(fullData);
  const jsonData = JSON.stringify(data);
  fs.writeFileSync("byPersonName.json", jsonData, "utf8");
}


/** this is a JSDOC comment */
function main() {
  console.log(dataURL);
  fetch(dataURL)
      .then((res) => res.json())
      .then((json) => writeJSONFile(json));
  console.log("finished");
}
main();

// this page was modelled after the Week 12 HW 1 videos on YouTube

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
    const strCharacter = String(r.character.name);

    let personData = personName[r.person.name];
    if (personData === undefined) {
      personData = {};
    }
    let makeData = personData[r.character.name];
    if (makeData === undefined) {
      makeData = {};
    }

    makeData[r.character.image.medium] = r.character.url; // should do r.id? from video
    personData[r.character.name] = makeData;

    personName[strPerson] = personData;
  });

  console.log(personName["Julie Kavner"]);

  //   console.log(personName);
  return personName;
}
/** this is a JSDOC comment */
function main() {
  //   console.log(dataURL);
  fetch(dataURL)
      .then((res) => res.json())
      .then((json) => makeTree(json));
}
main();

const fs = require("fs");
const rawJSON = fs.readFileSync("../base-data/data.csv.json");
const data = JSON.parse(rawJSON);

/**
 *  turns flat dataset into a tiered tree (country>date>chart position>data)
 * @param {object} data
 * @return {object} byRegion
 */
function makeTree(data) {
  const byRegion = {};

  data.forEach((r) => {
    const strRegion = String(r.Region);
    let regionData = byRegion[r.Region];

    if (regionData === undefined) {
      regionData = {};
    }

    let dateData = regionData[r.Date];
    if (dateData === undefined) {
      dateData = {};
    }

    let positionData = dateData[r.Position];
    if (positionData === undefined) {
      // positionData = {};
      positionData = r;
    }

    dateData[r.Position] = positionData;
    regionData[r.Date] = dateData;

    byRegion[strRegion] = regionData;
  });

  // console.log(byRegion);
  return byRegion;
}

/**
 * runs makeTree and writes the data file
 */
function main() {
  const byRegion = makeTree(data);
  fs.writeFileSync("../base-data/data.csv.json", JSON.stringify(byRegion));
}

main();

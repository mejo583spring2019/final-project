const fs = require("fs");
const rawJSON = fs.readFileSync("../base-data/data.csv.json");
const data = JSON.parse(rawJSON);

function makeTree(data) {
    let byRegion = {};

    data.forEach((r) => {
        let strRegion = String(r.Region)
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
            //positionData = {};
            positionData = r;
        }

        dateData[r.Position] = positionData;
        regionData[r.Date] = dateData;

        byRegion[strRegion] = regionData;
    });

    console.log(byRegion);
    return byRegion;
}

/* function writeJSONFile(filename, fullData) {
    const treeData = makeTree(data);
    const jsonData = JSON.stringify(treeData);
    fs.writeFileSync(filename, jsonData, "utf8");
} */

function main () {
    let byRegion = makeTree(data);
    fs.writeFileSync("../base-data/data.csv.json", JSON.stringify(byRegion));
}

main();
const fs = require ("fs");

/** rewrite file so only selected countries are present */
function main() {
    const rawJSON = fs.readFileSync("../base-data/data.csv.json");
    const data = JSON.parse(rawJSON);

    let us = data.filter((r) => r.Region === "us");
    let fr = data.filter((r) => r.Region === "fr");
    let it = data.filter((r) => r.Region === "it");
    let tr = data.filter((r) => r.Region === "tr");
    let de = data.filter((r) => r.Region === "de");
    let jp = data.filter((r) => r.Region === "jp");
    let br = data.filter((r) => r.Region === "br");
    let au = data.filter((r) => r.Region === "au");
    let mx = data.filter((r) => r.Region === "mx");
    let id = data.filter((r) => r.Region === "id");

    let allMonths = us.concat(fr, it, tr, de, jp, br, au, mx, id);

    fs.writeFileSync("../base-data/data.csv.json", JSON.stringify(allMonths));
}

main();
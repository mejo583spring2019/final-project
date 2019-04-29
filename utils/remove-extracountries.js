const fs = require("fs");

/** rewrite file so only selected countries are present */
function main() {
  const rawJSON = fs.readFileSync("../ternary-data/data.csv.json");
  const data = JSON.parse(rawJSON);

  const us = data.filter((r) => r.Region === "us");
  const fr = data.filter((r) => r.Region === "fr");
  const it = data.filter((r) => r.Region === "it");
  const tr = data.filter((r) => r.Region === "tr");
  const de = data.filter((r) => r.Region === "de");
  const jp = data.filter((r) => r.Region === "jp");
  const br = data.filter((r) => r.Region === "br");
  const au = data.filter((r) => r.Region === "au");
  const mx = data.filter((r) => r.Region === "mx");
  const id = data.filter((r) => r.Region === "id");

  const allMonths = us.concat(fr, it, tr, de, jp, br, au, mx, id);

  fs.writeFileSync("../ternary-data/data.csv.json", JSON.stringify(allMonths));
}

main();

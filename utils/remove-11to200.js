const fs = require("fs");

/** remove entries over #10 position in list */
function main() {
  const rawJSON = fs.readFileSync("../ternary-data/data.csv.json");
  const data = JSON.parse(rawJSON);
  // eslint-disable-next-line max-len
  fs.writeFileSync("../ternary-data/data.csv.json", JSON.stringify(data.filter((r) => r.Position <= 10)));
}

main();

const fs = require("fs");

/** Converts csv into json file */
function main() {
  const rawJSON = fs.readFileSync("../cleaned_json/arrest_trends.csv.json");
  const data = JSON.parse(rawJSON);

  data.forEach((r) => {
    delete r.field5;
  });

  const finalJSON = JSON.stringify(data);
  fs.writeFileSync("../cleaned_json/arrest_trends.csv.json", finalJSON);
}

main();

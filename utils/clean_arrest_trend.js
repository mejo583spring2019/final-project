const fs = require("fs");

function main() {
  let rawJSON = fs.readFileSync("../cleaned_json/arrest_trends.csv.json");
  let data = JSON.parse(rawJSON);

  data.forEach((r) => {
    delete r.field5;
  });

  let finalJSON = JSON.stringify(data);
  fs.writeFileSync("../cleaned_json/arrest_trends.csv.json", finalJSON);
}

main();
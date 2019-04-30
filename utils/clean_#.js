const fs = require("fs");

/** Replaces commas in crime numbers */
function main() {
  if (process.argv.length < 3) {
    process.stderr.write("Please provide the path to the file to clean.\n");
  }
  const filepath = process.argv[2];
  const rawJSON = fs.readFileSync(filepath);

  const data = JSON.parse(rawJSON);

  data.forEach((r) => {
    Object.keys(r).forEach((k) => {
      if (k.indexOf("#") >= 0) {
        let val = r[k];
        val = val.replace(",", "");
        r[k] = val;
      }
      delete r.field5;
    });
  });

  const finalJSON = JSON.stringify(data);
  fs.writeFileSync(filepath, finalJSON);
}

main();

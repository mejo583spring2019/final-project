const fs = require("fs");

/** Replaces commas in crime numbers */
function main() {
  if (process.argv.length < 3) {
    process.stderr.write("Please provide the path to the file to clean.\n");
  }
  let filepath = process.argv[2];
  let rawJSON = fs.readFileSync(filepath);

  let data = JSON.parse(rawJSON);

  data.forEach((r) => {
    Object.keys(r).forEach(k => {
      if (k.indexOf("#") >= 0) {
        let val = r[k];
        val = val.replace(',', '');
        r[k] = val;
      }
      delete r.field5;
    })
  })

  let finalJSON = JSON.stringify(data);
  fs.writeFileSync(filepath, finalJSON);
}

main();

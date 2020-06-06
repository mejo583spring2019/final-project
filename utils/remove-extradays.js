const fs = require("fs");

/** rewrite file so only the dates at the start of every month are present */
function main() {
  const rawJSON = fs.readFileSync("../base-data/data.csv.json");
  const data = JSON.parse(rawJSON);

  const jan = data.filter((r) => r.Date === "2017-01-01");
  const feb = data.filter((r) => r.Date === "2017-02-01");
  const mar = data.filter((r) => r.Date === "2017-03-01");
  const apr = data.filter((r) => r.Date === "2017-04-01");
  const may = data.filter((r) => r.Date === "2017-05-01");
  const jun = data.filter((r) => r.Date === "2017-06-01");
  const jul = data.filter((r) => r.Date === "2017-07-01");
  const aug = data.filter((r) => r.Date === "2017-08-01");
  const sep = data.filter((r) => r.Date === "2017-09-01");
  const oct = data.filter((r) => r.Date === "2017-10-01");
  const nov = data.filter((r) => r.Date === "2017-11-01");
  const dec = data.filter((r) => r.Date === "2017-12-01");
  const jan2 = data.filter((r) => r.Date === "2018-01-01");

  // eslint-disable-next-line max-len
  const allMonths = jan.concat(feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, jan2);

  fs.writeFileSync("../base-data/data.csv.json", JSON.stringify(allMonths));
}

main();

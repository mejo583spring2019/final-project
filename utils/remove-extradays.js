const fs = require ("fs");



/** rewrite file so only the dates at the start of every month are present */
function main() {
    const rawJSON = fs.readFileSync("../base-data/data.csv.json");
    const data = JSON.parse(rawJSON);

    let jan = data.filter((r) => r.Date === "2017-01-01");
    let feb = data.filter((r) => r.Date === "2017-02-01"); 
    let mar = data.filter((r) => r.Date === "2017-03-01"); 
    let apr = data.filter((r) => r.Date === "2017-04-01"); 
    let may = data.filter((r) => r.Date === "2017-05-01"); 
    let jun = data.filter((r) => r.Date === "2017-06-01"); 
    let jul = data.filter((r) => r.Date === "2017-07-01"); 
    let aug = data.filter((r) => r.Date === "2017-08-01"); 
    let sep = data.filter((r) => r.Date === "2017-09-01"); 
    let oct = data.filter((r) => r.Date === "2017-10-01"); 
    let nov = data.filter((r) => r.Date === "2017-11-01"); 
    let dec = data.filter((r) => r.Date === "2017-12-01");
    let jan2 = data.filter((r) => r.Date === "2018-01-01");

    let allMonths = jan.concat(feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, jan2);

    fs.writeFileSync("../base-data/data.csv.json", JSON.stringify(allMonths));
}

main();
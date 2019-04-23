const fs = require ("fs");



/** remove entries over #10 position in list */
function main() {
    const rawJSON = fs.readFileSync("../raw-data/handpicked.csv.json");
    const data = JSON.parse(rawJSON);
    /*data.forEach((r) => {
        if(r.Position > 10) {
            console.log(r.Position);
            r.delete;
        } 
    }); 

    console.log(data[12].Position);
    let finalJSON = JSON.stringify(data);
    fs.writeFileSync("../raw-data/text.json", finalJSON); */
    fs.writeFileSync("../raw-data/handpicked.csv.json", JSON.stringify(data.filter((r) => r.Position <= 10)))
}

main();
const fetch = require("node-fetch");
const fs = require("fs");
const API_KEY = process.env.college_api_key;

/**
 * fetches data from API and
 * file writes it to JSON
 */
function main() {
  /** Fetches data from College Scorecard API */
  fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?school.name=university%20of%20north%20carolina&fields=school.name,id,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.non_resident_alien,latest.student.demographics.race_ethnicity.unknown,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander&sort=latest.completion.rate_suppressed.overall:desc&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(
          (json) =>
            fs.writeFileSync(
                "data/completion-by-race.json", JSON.stringify(json, null, 2)
            )
      );
}

main();

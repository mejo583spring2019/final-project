const fetch = require("node-fetch");
const fs = require("fs");
const API_KEY = process.env.college_api_key;

/**
 * fetches data from API and
 * file writes it to JSON
 */
function main() {
  const schools = [
    {
      name: "unc-schools",
      url_safe: "university%20of%20north%20carolina",
    }, {
      name: "duke",
      url_safe: "duke",
    }, {
      name: "wake forest",
      url_safe: "wake%20forest",
    }, {
      name: "ncsu",
      url_safe: "north%20carolina%20state%20university",
    }, {
      name: "appalachian",
      url_safe: "appalachian%20state%20university",
    }, {
      name: "wcu",
      url_safe: "western%20carolina%20university",
    }, {
      name: "ecu",
      url_safe: "east%20carolina%20university",
    }, {
      name: "elizabeth-city-state",
      url_safe: "elizabeth%20city%20state%20university",
    }, {
      name: "elon",
      url_safe: "elon%20university",
    }, {
      name: "davidson",
      url_safe: "davidson%20college",
    },
  ];

  schools.forEach((s) => {
    /** Fetches data from College Scorecard API */
    fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${s.url_safe}&school.region_id=5&_fields=school.name,id,latest.completion.completion_rate_4yr_150nt,latest.completion.completion_rate_4yr_150_white,latest.completion.completion_rate_4yr_150_black,latest.completion.completion_rate_4yr_150_hispanic,latest.completion.completion_rate_4yr_150_asian,latest.completion.completion_rate_4yr_150_aian,latest.completion.completion_rate_4yr_150_nhpi,latest.completion.completion_rate_4yr_150_2ormore,latest.completion.completion_rate_4yr_150_race.unknown,latest.student.size,latest.student.demographics.race_ethnicity.white,latest.student.demographics.race_ethnicity.black,latest.student.demographics.race_ethnicity.hispanic,latest.student.demographics.race_ethnicity.asian,latest.student.demographics.race_ethnicity.aian,latest.student.demographics.race_ethnicity.nhpi,latest.student.demographics.race_ethnicity.two_or_more,latest.student.demographics.race_ethnicity.non_resident_alien,latest.student.demographics.race_ethnicity.unknown,latest.student.demographics.race_ethnicity.white_non_hispanic,latest.student.demographics.race_ethnicity.black_non_hispanic,latest.student.demographics.race_ethnicity.asian_pacific_islander&sort=latest.completion.rate_suppressed.overall:desc&api_key=${API_KEY}`)
        .then((res) => res.json())
        .then(
            (json) =>
              fs.writeFileSync(
                  `data/${s.name}.js`, JSON.stringify(json.results, null, 2)
              )
        );
  });
}

main();

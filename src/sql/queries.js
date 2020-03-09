var fs = require("fs");
const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "ipl",
  password: "Krishna@1997",
  port: 5432
});
client.connect()
// matches played for year
.then(()=> console.log("client connected suuccesfully and selecting the values for matches played for year "))
.then(()=> client.query('SELECT season, count(season) FROM matches GROUP BY (season)'))
.then((results => {
  console.table(results.rows)
  var numberOfMatchesPlayedPerYearJSON = JSON.stringify(results.rows); 
    fs.writeFile('../output/numberOfMatchesPlayedPerYear.JSON',numberOfMatchesPlayedPerYearJSON,function(error){
        if(error){
            throw error
        };
        console.log("numberOfMatchesPlayedPerYear.JSON file saved successfully!");
    });
}))


//matches won by team per year
.then(()=> console.log("showing table for matches played for year "))
.then(() =>client.query('SELECT season ,winner ,count(winner) FROM matches GROUP BY season,winner ORDER BY season ASC'))
.then((results => {
  console.table(results.rows)
    var numberOfmatchesWonPerTeamPerYearJSON = JSON.stringify(results.rows); 
    fs.writeFile('../output/numberOfmatchesWonPerTeamPerYear.JSON',numberOfmatchesWonPerTeamPerYearJSON,function(error){
        if(error){
            throw error
        };
        console.log("numberOfmatchesWonPerTeamPerYear.JSON file saved successfully!");
    }); 
}))



// extra runs given in 2016 by every team
.then(()=> console.log("showing table for extra runs given by teams in 2016 "))
.then(() =>client.query('SELECT bowling_team,sum(extra_runs) FROM matches INNER JOIN deliveries ON matches.id = deliveries.match_id WHERE season = 2016 GROUP BY bowling_team'))
.then((results => {
  console.table(results.rows)
  var extraRunsIn2016JSON = JSON.stringify(results.rows); 
  fs.writeFile('../output/extraRunsIn2016.JSON',extraRunsIn2016JSON,function(error){              //write output for extraRunsIn2016
      if(error){
          throw error
      };
      console.log("extraRunsIn2016.JSON file saved successfully!");
  });
}))


//top 10 economical bowlers in 2015 
// SELECT bowler,sum(batsman_runs) as runs , count(ball) as balls FROM matches INNER JOIN deliveries ON matches.id = deliveries.match_id WHERE season = 2015 and deliveries.extra_runs = 0 GROUP BY bowler order by runs asc 
.then(()=> console.log("showing table top ten economical bowlers in 2015"))
.then(() =>client.query('SELECT bowler,((sum(batsman_runs)*1.0/  count(ball)*1.0)*6 ) as economy FROM matches INNER JOIN deliveries ON matches.id = deliveries.match_id WHERE season = 2015 and deliveries.extra_runs = 0 and deliveries.noball_runs = 0 and deliveries.wide_runs = 0 GROUP BY bowler order by economy asc  limit 10'))
.then((results =>{ console.table(results.rows)
  var EconomicalBowlersForYearJSON = JSON.stringify(results.rows); 
    fs.writeFile('../output/EconomicalBowlersForYear.JSON',EconomicalBowlersForYearJSON,function(error){              //write output for EconomicalBowlersForYear
        if(error){
            throw error
        };
        console.log("EconomicalBowlersForYear.JSON file saved successfully!");
    });
}))

.catch(e=> console.log)
.finally(()=>client.end().then(console.log("client disconnected")))





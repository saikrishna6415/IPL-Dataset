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
.then((results => console.table(results.rows)))


//matches won by team per year
.then(()=> console.log("showing table for matches played for year "))
.then(() =>client.query('SELECT season ,winner ,count(winner) FROM matches GROUP BY season,winner ORDER BY season ASC'))
.then((results => console.table(results.rows)))



// extra runs given in 2016 by every team
.then(()=> console.log("showing table for extra runs given by teams in 2016 "))
.then(() =>client.query('SELECT bowling_team,sum(extra_runs) FROM matches INNER JOIN deliveries ON matches.id = deliveries.match_id WHERE season = 2016 GROUP BY bowling_team'))
.then((results => console.table(results.rows)))

.catch(e=> console.log)
.finally(()=>client.end().then(console.log("client disconnected")))


// .catch(e=> console.log)







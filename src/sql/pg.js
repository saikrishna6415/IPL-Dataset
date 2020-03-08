var fs = require("fs");
const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "ipl",
  password: "Krishna@1997",
  port: 5432
});

//creating table for matches
client.connect()
.then(()=> console.log("creating table matches "))
.then(()=> client.query("CREATE TABLE IF NOT EXISTS matches (id INTEGER PRIMARY KEY NOT NULL ,season INTEGER NOT NULL ,city VARCHAR(150),date DATE,team1 VARCHAR(150),team2 VARCHAR(150),toss_winner VARCHAR(150),toss_decision VARCHAR(150),result VARCHAR(150),dl_applied VARCHAR(150) ,winner VARCHAR(150) ,win_by_runs INTEGER,win_by_wickets INTEGER,player_of_match VARCHAR(150) ,venue VARCHAR(150),umpire1 VARCHAR(150),umpire2 VARCHAR(150), umpire3 VARCHAR(150) )"),(err, res) => {
            console.log(err, res);
            Client.end();
          })
.then(()=> console.log("Table matches created successfully" ))
.then(()=> console.log("creating table deliveries "))
.then(()=> client.query("CREATE TABLE IF NOT EXISTS deliveries (match_id INTEGER NOT NULL,inning INTEGER ,batting_team VARCHAR(150),bowling_team VARCHAR(150),over INTEGER,ball INTEGER,batsman VARCHAR(150),non_striker VARCHAR(150),bowler VARCHAR(150),is_super_over VARCHAR(150),wide_runs INTEGER,bye_runs INTEGER,legbye_runs INTEGER,noball_runs INTEGER,penalty_runs INTEGER,batsman_runs INTEGER,extra_runs INTEGER,total_runs INTEGER,player_dismissed VARCHAR(150),dismissal_kind VARCHAR(150),fielder VARCHAR(150))"),(err, res) => {
            console.log(err, res);
            Client.end();
          })
.then(()=> console.log("Table deliveries created successfully" ))
.catch(e=> console.log)
.finally(()=>client.end())





var fs = require("fs");
const { Client } = require('pg');

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "ipl",
  password: "Krishna@1997",
  port: 5432
});
// copy matches.csv to matches table
client.connect()
.then(()=> console.log("copying  matches values from matches.csv "))
.then(()=> client.query("copy matches from '/home/saikrishna-kotagiri/gitlab/ipldataset/src/data/matches.csv' DELIMITER ',' CSV HEADER"),(err, res) => {
            console.log(err, res);
            Client.end();
          })
.then(()=> console.log("copied all matches successfully" ))
.then(()=> console.log("copying deliveries values from deliveries.csv "))
.then(()=> client.query("copy deliveries from '/home/saikrishna-kotagiri/gitlab/ipldataset/src/data/deliveries.csv' DELIMITER ',' CSV HEADER"),(err, res) => {
            console.log(err, res);
            Client.end();
          })
.then(()=> console.log("copied all deliveries successfully" ))
.catch(e=> console.log)
.finally(()=>client.end())






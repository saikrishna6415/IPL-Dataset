var fs=require('fs')
const path = require('path')
var results = require('./ipl.js');
// var matches=require('../data/matches');
// var deliveries =    require ('../data/deliveries');
// console.log(__dirname)
// console.log(__filename)

const csv=require('csvtojson')
csv().fromFile(path.join(__dirname, '../data/matches.csv')).then((matches)=>{
csv().fromFile(path.join(__dirname, '../data/deliveries.csv')).then((deliveries)=>{
    var numberOfMatchesPlayedPerYear = results.numberOfMatchesPlayedPerYear(matches)
    // console.log(numberOfMatchesPlayedPerYear)
    var numberOfMatchesPlayedPerYearJSON = JSON.stringify(numberOfMatchesPlayedPerYear); 
    fs.writeFile(path.join(__dirname,'../output/numberOfMatchesPlayedPerYear.JSON'),numberOfMatchesPlayedPerYearJSON,function(error){
        if(error){
            throw error
        };
        console.log("numberOfMatchesPlayedPerYear.JSON file saved successfully!");
    });
   //write output for numberOfMatchesPlayedPerYear



    var numberOfmatchesWonPerTeamPerYear = results.numberOfmatchesWonPerTeamPerYear(matches)
    // console.log(numberOfMatchesPlayedPerYearJSON)
    var numberOfmatchesWonPerTeamPerYearJSON = JSON.stringify(numberOfmatchesWonPerTeamPerYear); 
    fs.writeFile(path.join(__dirname,'../output/numberOfmatchesWonPerTeamPerYear.JSON'),numberOfmatchesWonPerTeamPerYearJSON,function(error){
        if(error){
            throw error
        };
        console.log("numberOfmatchesWonPerTeamPerYear.JSON file saved successfully!");
    }); // writes a json output for numberOfmatchesWonPerTeamPerYear



    var extraRunsIn2016 = results.extraRunsIn2016(matches,deliveries)
    // console.log(extraRunsIn2016)
    var extraRunsIn2016JSON = JSON.stringify(extraRunsIn2016); 
    fs.writeFile(path.join(__dirname,'../output/extraRunsIn2016.JSON'),extraRunsIn2016JSON,function(error){              //write output for extraRunsIn2016
        if(error){
            throw error
        };
        console.log("extraRunsIn2016.JSON file saved successfully!");
    });

    var EconomicalBowlersForYear = results.economicalBowlers(matches,deliveries)
    // console.log(EconomicalBowlersForYear)
    var EconomicalBowlersForYearJSON = JSON.stringify(EconomicalBowlersForYear); 
    fs.writeFile(path.join(__dirname,'../output/EconomicalBowlersForYear.JSON'),EconomicalBowlersForYearJSON,function(error){              //write output for EconomicalBowlersForYear
        if(error){
            throw error
        };
        console.log("EconomicalBowlersForYear.JSON file saved successfully!");
    });

        })
})






// let iplpro={};


// iplpro["numberOfMatchesPlayedPerYear"]=numberOfMatchesPlayedPerYear;
// iplpro["matchesWonPerTeamPerYear"]=numberOfmatchesWonPerTeamPerYear;
// iplpro["ExtraRunsPerTeam"]=extraRunsIn2016;
// iplpro["EconomicalBowler"]=EconomicalBowlersForYear;



// console.log(iplpro)
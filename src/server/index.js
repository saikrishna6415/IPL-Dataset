var fs=require('fs')
var results = require('./ipl.js');
var matches=require('../data/matches');
var deliveries =    require ('../data/deliveries');



var numberOfMatchesPlayedPerYear = results.numberOfMatchesPlayedPerYear(matches)
var numberOfMatchesPlayedPerYearJSON = JSON.stringify(numberOfMatchesPlayedPerYear); 
fs.writeFile('../output/numberOfMatchesPlayedPerYear.JSON',numberOfMatchesPlayedPerYearJSON,function(error){              //write output for numberOfMatchesPlayedPerYear
    if(error){
        throw error
    };
    console.log("numberOfMatchesPlayedPerYear.JSON file saved successfully!");
});



var numberOfmatchesWonPerTeamPerYear = results.numberOfmatchesWonPerTeamPerYear(matches)
var numberOfmatchesWonPerTeamPerYearJSON = JSON.stringify(numberOfmatchesWonPerTeamPerYear); 
fs.writeFile('../output/numberOfmatchesWonPerTeamPerYear.JSON',numberOfmatchesWonPerTeamPerYearJSON,function(error){              //write output for numberOfmatchesWonPerTeamPerYear
    if(error){
        throw error
    };
    console.log("numberOfmatchesWonPerTeamPerYear.JSON file saved successfully!");
});




var extraRunsIn2016 = results.extraRunsIn2016(matches,deliveries)
var extraRunsIn2016JSON = JSON.stringify(extraRunsIn2016); 
fs.writeFile('../output/extraRunsIn2016.JSON',extraRunsIn2016JSON,function(error){              //write output for extraRunsIn2016
    if(error){
        throw error
    };
    console.log("extraRunsIn2016.JSON file saved successfully!");
});



var EconomicalBowlersForYear = results.economicalBowlers(matches,deliveries)
var EconomicalBowlersForYearJSON = JSON.stringify(EconomicalBowlersForYear); 
fs.writeFile('../output/EconomicalBowlersForYear.JSON',EconomicalBowlersForYearJSON,function(error){              //write output for EconomicalBowlersForYear
    if(error){
        throw error
    };
    console.log("EconomicalBowlersForYear.JSON file saved successfully!");
});




// let iplpro={};


// iplpro["numberOfMatchesPlayedPerYear"]=numberOfMatchesPlayedPerYear;
// iplpro["matchesWonPerTeamPerYear"]=numberOfmatchesWonPerTeamPerYear;
// iplpro["ExtraRunsPerTeam"]=extraRunsIn2016;
// iplpro["EconomicalBowler"]=EconomicalBowlersForYear;



// console.log(iplpro)


var matches = require('../data/matches.json')
var deliveries = require('../data/deliveries.json')

var matchinfo = [ ]
const matchid = matches.map(match =>{
    if ( match.team1 === "Royal Challengers Bangalore" || match.team2 === "Royal Challengers Bangalore"){
        matcid = { }
        matcid["id"] = match.id
        matcid["seson"] = match.season
        matchinfo.push(matcid)
        // matcid.push([match.id,match.season]);
    }
})
// const matchids = matchid.map(match)


console.log(matchinfo)

const abdRunsAgainstTeamsPerYear = (matcid,deliveries) =>{
   deliveries.reduce((runsAgnstTeam,delivery)=>{
       if (delivery.batsman === "AB de Villiers") {
          if(delivery.bowling_team){
            for (var i = 0; i < matcid.length; i++) {
                if (matcid[i][0] === delivery.match_id) {
                       console.log( matcid[i][1] )
                    // console.log(year)
                    if (  ! runsAgnstTeam.year){
                        runsAgnstTeam.year = { }
                    }
                    if (runsAgnstTeam.year[delivery.bowling_team]){
                        runsAgnstTeam.year[delivery.bowling_team] =  parseInt(delivery.batsman_runs)
                    } else {
                        runsAgnstTeam.year[delivery.bowling_team] = parseInt(delivery.batsman_runs)
                    }
                  }
              }
          }
        //   console.log(runsAgnstTeam)
       }return runsAgnstTeam;
   },{})  
}
// // console.log(abdRunsAgainstTeamsPerYear(matches,deliveries))
console.log(abdRunsAgainstTeamsPerYear(matchsinfo,deliveries))
const numberOfMatchesPlayedPerYear =(matches) => {
  return matches.reduce((matchesplayed, match) => {
      // console.log(matchesplayed)                                                           //1
      if(matchesplayed[match.season] ) { 
           matchesplayed[match.season]++   //count numbers of matches played per year
          } 
       else {
          matchesplayed[match.season] =1;
          }
      return matchesplayed;
  },{})
}

// console.log(numberOfMatchesPlayedPerYear(matches))





const numberOfmatchesWonPerTeamPerYear = (matches) => {
  return matches.reduce((matcheswonperyear,match) => {
      if (! matcheswonperyear[match.season]) {
          matcheswonperyear[match.season] = {}                          
      }   
      if (matcheswonperyear[match.season][match.winner]) {        //count number of matches played per team per year
          matcheswonperyear[match.season][match.winner] ++                   // method (i)
      }
      else {
          matcheswonperyear[match.season][match.winner] =1        
      }
      return matcheswonperyear;
  },{})
}
// console.log(numberOfmatchesWonPerTeamPerYear(matches))



// const numberOfmatchesWonPerTeamPerYear = (matches) => {
//     return matches.reduce((matcheswonperyear,match) => {
//         if (! matcheswonperyear[match.winner]) {
//             matcheswonperyear[match.winner] = {}
//         }
//         if (matcheswonperyear[match.winner][match.season]) {
//             matcheswonperyear[match.winner][match.season] ++                   //method (ii)
//         }
//         else{
//             matcheswonperyear[match.winner][match.season] =1
//         }
//         return matcheswonperyear;
//     },{})

// }
// console.log(numberOfmatchesWonPerTeamPerYear(matches))



const extraRunsIn2016 = (matches,deliveries) => {
  var matches2016 =[ ]
    matches.filter(match =>{
      if (match.season === '2016'){                       //filtered 2016 matches
        matches2016.push(parseInt(match.id))
      }
    })
  return deliveries.reduce((extraruns, delivery) => {
    if ((delivery.match_id >= matches2016[0] && delivery.match_id <= matches2016[matches2016.length-1]) ) {
        if (extraruns[delivery.bowling_team]) {   
          extraruns[delivery.bowling_team] = extraruns[delivery.bowling_team] + parseInt(delivery.extra_runs)         //count numbers of extra runs given by bowling team
        }
        else {
          extraruns[delivery.bowling_team] =parseInt( delivery.extra_runs)
        }
      }
      return extraruns;
  },{})
}


const economicalBowlers = (matches,deliveries) => {
  var matches2015 =[ ]
    matches.filter(match =>{  
      if (match.season === '2015'){                       //filtered matches played in 2015
        matches2015.push(parseInt(match.id))
      } 
    })
  var balls = deliveries.reduce((ballsbowled, delivery) => {
      if (parseInt(delivery.match_id) >=matches2015[0] && parseInt(delivery.match_id) <= matches2015[matches2015.length-1]) { 
      if (delivery.noball_runs === "0" && delivery.wide_runs==="0"){
        if ( ballsbowled[delivery.bowler]) {
          ballsbowled[delivery.bowler]++                    //count numbers of balls bowled by particualar bowler
        }
        else {
          ballsbowled[delivery.bowler] = 1
        }
      }
      }
      return ballsbowled
    }, {})
  
  
  
    var runs = deliveries.reduce((runsgiven, delivery) => {
      if (parseInt(delivery.match_id) >=matches2015[0] && parseInt(delivery.match_id) <= matches2015[matches2015.length-1]) {                                       // Function Will return total number of run given by bowler   
      if (runsgiven[delivery.bowler]) {
          runsgiven[delivery.bowler] = runsgiven[delivery.bowler] + parseInt(delivery.total_runs)         //count numbers of runs given by bowler
        }
        else {
          runsgiven[delivery.bowler] = parseInt(delivery.total_runs)
        }
      }
      return runsgiven
    }, {})
  var run = Object.values(runs)                     //runs given by bowler
  var ball = Object.values(balls)                   //balls bowled by bowler
  var player = Object.keys(balls)
  var economy = [];
  var sortedEconomy = [];
  for (let i = 0; i < run.length; i++) {  
      economy.push((run[i] / ball[i]) * 6)        //calculate economy 
    }
    for (let j = 0; j < economy.length; j++) {
      sortedEconomy.push(economy[j])                        
    }
    sortedEconomy.sort(function (a, b) {
      return a - b                              //sorting economy
    })
    var result = {}
    for (var j = 0; j < 10; j++) {
      var top10 = economy.indexOf(sortedEconomy[j]) 
      result[player[top10]] = sortedEconomy[j]         
    }
    return result;

}

module.exports = {
numberOfMatchesPlayedPerYear,
numberOfmatchesWonPerTeamPerYear, extraRunsIn2016, economicalBowlers
}

// module.exports.numberOfMatchesPlayedPerYear = numberOfMatchesPlayedPerYear;
// module.exports.numberOfmatchesWonPerTeamPerYear =numberOfmatchesWonPerTeamPerYear;
// module.exports.extraRunsIn2016 = extraRunsIn2016;
// module.exports.economicalBowlers = economicalBowlers;
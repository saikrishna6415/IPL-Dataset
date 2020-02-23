const numberOfMatchesPlayedPerYear =(matches) => {
    return matches.reduce((acc, match) => {
        // console.log(acc)                                                           //1
        if(acc[match.season] ) { 
             acc[match.season]++   
            } 
         else {
            acc[match.season] =1;
            }
        return acc;
    },{})
}

// console.log(numberOfMatchesPlayedPerYear(matches))





const numberOfmatchesWonPerTeamPerYear = (matches) => {
    return matches.reduce((acc,match) => {
        if (! acc[match.season]) {
            acc[match.season] = {}
        }
        if (acc[match.season][match.winner]) {
            acc[match.season][match.winner] ++                   //2nd answer method (i)
        }
        else {
            acc[match.season][match.winner] =1
        }
        return acc;
    },{})
}
// console.log(numberOfmatchesWonPerTeamPerYear(matches))



// const numberOfmatchesWonPerTeamPerYear = (matches) => {
//     return matches.reduce((acc,match) => {
//         if (! acc[match.winner]) {
//             acc[match.winner] = {}
//         }
//         if (acc[match.winner][match.season]) {
//             acc[match.winner][match.season] ++                   //2nd answer method (ii)
//         }
//         else{
//             acc[match.winner][match.season] =1
//         }
//         return acc;
//     },{})

// }
// console.log(numberOfmatchesWonPerTeamPerYear(matches))



const extraRunsIn2016 = (matches,deliveries) => {
    var matches2016 =[ ]
    for (let i = 0; i< matches.length; i++) {
        if (matches[i]['season'] === '2016') {
            matches2016.push(parseInt(matches[i]['id']))
        }
    }
    return deliveries.reduce((acc, delivery) => {
        if ((delivery.match_id >= matches2016[0] && delivery.match_id <= matches2016[matches2016.length-1]) ) {
          if (acc[delivery.bowling_team]) {   
            acc[delivery.bowling_team] = acc[delivery.bowling_team] + parseInt(delivery.extra_runs)
          }
          else {
            acc[delivery.bowling_team] =parseInt( delivery.extra_runs)
          }
        }
        return acc;
    },{})
  }


  const economicalBowlers = (matches,deliveries) => {
    var matches2015 =[ ]
    for (let i = 0; i< matches.length; i++) {
        if (matches[i]['season'] === '2015') {
            matches2015.push(parseInt(matches[i]['id']))
        }
    }

    var balls = deliveries.reduce((acc, delivery) => {
        if (parseInt(delivery.match_id) >=matches2015[0] && parseInt(delivery.match_id) <= matches2015[matches2015.length-1]) { 
          if ( acc[delivery.bowler]) {
            acc[delivery.bowler]++
          }
          else {
            acc[delivery.bowler] = 1
          }
        }
        return acc
      }, {})
    
    
    
      var runs = deliveries.reduce((acc, delivery) => {
        if (parseInt(delivery.match_id) >=matches2015[0] && parseInt(delivery.match_id) >= matches2015[matches2015.length-1]) {                                       // Function Will return total number of run given by bowler 
          if (acc[delivery.bowler]) {
            acc[delivery.bowler] = acc[delivery.bowler] + parseInt(delivery.total_runs)
          }
          else {
            acc[delivery.bowler] = parseInt(delivery.total_runs)
          }
        }
        return acc
      }, {})
    var run = Object.values(runs)
    var ball = Object.values(balls)
    var player = Object.keys(balls)
    var economy = [];
    var sortedEconomy = [];
    for (let i = 0; i < run.length; i++) {  
        economy.push((run[i] / ball[i]) * 6)
      }
      for (let j = 0; j < economy.length; j++) {
        sortedEconomy.push(economy[j])                        
      }
      sortedEconomy.sort(function (a, b) {
        return a - b
      })
      var result = {}
      for (var j = 0; j < 10; j++) {
        var top10 = economy.indexOf(sortedEconomy[j]) 
        result[player[top10]] = sortedEconomy[j]
      }
      return result         ;

  }



module.exports.numberOfMatchesPlayedPerYear = numberOfMatchesPlayedPerYear;
module.exports.numberOfmatchesWonPerTeamPerYear =numberOfmatchesWonPerTeamPerYear;
module.exports.extraRunsIn2016 = extraRunsIn2016;
module.exports.economicalBowlers = economicalBowlers;

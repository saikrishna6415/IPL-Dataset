const matches = require('../data/matches.json')
const deliveries = require('../data/deliveries.json')

function abdRuns(deliveries){
    const abdFacedeliveries = deliveries.filter((delivery)=>{     //find abd played deliveries
        if (delivery.batsman === "AB de Villiers"){
            return delivery
        }  
    });
    const runsAgntsBowlingteam = abdFacedeliveries.reduce((runsagntbowling,abdFacedelivery)=>{
        if (! runsagntbowling[abdFacedelivery.match_id]){
            runsagntbowling[abdFacedelivery.match_id] = { }                                         //create a nested object for id and bowling team with runs against team by ball
        }
        if (runsagntbowling[abdFacedelivery.match_id][abdFacedelivery.bowling_team]){
            runsagntbowling[abdFacedelivery.match_id][abdFacedelivery.bowling_team] += parseInt(abdFacedelivery.batsman_runs)
        }else {
            runsagntbowling[abdFacedelivery.match_id][abdFacedelivery.bowling_team] = parseInt(abdFacedelivery.batsman_runs)
        }
        return runsagntbowling
    },{ })

    let ids = Object.keys(runsAgntsBowlingteam)         //ids of abd played
    let matchSeason = matches.reduce((iseason, season) => {
        if (ids.includes(season.id)) {                //ids with sesaon
            iseason[season.id] = season.season
        }
        return iseason;
    }, {})

    let season = Object.values(matchSeason)
    const arr1 = Object.values(runsAgntsBowlingteam)
    for (let i = 0;i<arr1.length;i++){
        arr1[i].season = season[i]
    }
    const result = arr1.reduce((abdrunspersesaon,match)=>{
        
    },{})
    return result
}
console.log(abdRuns(deliveries))
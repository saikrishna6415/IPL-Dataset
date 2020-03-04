const matches = require('../data/matches.json')
const deliveries = require('../data/deliveries.json')

function abdRuns(deliveries){
    const abdFacedeliveries = deliveries.filter((delivery)=>{     //find abd played deliveries
        if (delivery.batsman === "AB de Villiers"){
            return delivery
        }  
    }); 
    // return abdFacedeliveries
    const idsndBowlingteam = abdFacedeliveries.reduce((idbowling,abdFacedelivery)=>{
        idbowling[abdFacedelivery.match_id]  = abdFacedelivery.bowling_team                  // match id nd opp team
            return idbowling
        },{ });

    const runsAgntsBowlingteam = abdFacedeliveries.reduce((runsagntbowling,abdFacedelivery)=>{
        if (! runsagntbowling[abdFacedelivery.match_id]){
            runsagntbowling[abdFacedelivery.match_id] = { }                                         //create a nested object for id and bowling team with runs against team by ball
        }
        if (! runsagntbowling[abdFacedelivery.match_id][abdFacedelivery.bowling_team]){
            runsagntbowling[abdFacedelivery.match_id][abdFacedelivery.bowling_team] = [ ]
        }
            runsagntbowling[abdFacedelivery.match_id][abdFacedelivery.bowling_team].push (+abdFacedelivery.batsman_runs)
    
        return runsagntbowling
    },{ })

    let ids = Object.keys(runsAgntsBowlingteam)         //ids of abd played

    let agnstteamsndruns = Object.values(runsAgntsBowlingteam)
    let abdrunsperid = Object.values(agnstteamsndruns)
    let sumrums = abdrunsperid.map(teams=>{
        return Object.values(teams).map(item=>{
            return item.reduce((a,b)=>{
                return a+b
            },0)
        })
    })
    let matchSeason = matches.reduce((iseason, season) => {
        if (ids.includes(season["id"].toString())) {
            iseason[season.id] = season['season']
        }
        return iseason;
    }, {})
    let seasonma = Object.values(matchSeason)
    let teams = Object.values(idsndBowlingteam)         
    let new1 = [ ]
    for (let i =0; i < teams.length;i++){
        obj = { }
        obj.season = seasonma[i]
        obj.oppteam =  teams[i]
        obj.runs = sumrums[i][0]
        new1.push(obj)
    }
    const result = new1.reduce((abdrunspersesaon,match)=>{
        if(! abdrunspersesaon[match.season]){
            abdrunspersesaon[match.season] = { }
        }
        if (abdrunspersesaon[match.season][match.oppteam]){
            abdrunspersesaon[match.season][match.oppteam] +=  match.runs
        }else{
            abdrunspersesaon[match.season][match.oppteam]= match.runs
        }
        return abdrunspersesaon
    },{})
    return result
}
console.log(abdRuns(deliveries))
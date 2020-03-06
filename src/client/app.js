function numberOfMatchesPlayedPerYear() {
  fetch('http://localhost:3000/numOfMatchesPerYear')
  .then((res) => {
      return res.json()
  })
  .then(data => {
    Highcharts.chart('container1', {
        chart: {
            type: 'column',
           
        },
        title: {
            text: 'IPL Matches for all year'
        },
        subtitle: {
            text: ''
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {

            categories: Object.keys(data)
        },
        yAxis: {
            title: {
                text: 'Number of Matches'
            }
        },
        series: [{
            name: 'Matches',
            data: Object.values(data)
        }]
    });
})
}
function Numberofmatcheswinbyteamperyear(){
  fetch('http://localhost:3000/numberOfmatchesWonPerTeamPerYear')
  .then((res) => {
      return res.json()
  })
  .then(data => {
      let arr1 = Object.keys(data)
      let arr2 = Object.values(data)
      graphdata = []
      const matchesdata = arr1.map(match=>{
          let team = { }
          team.name = match
          team.data = Object.values(data[match])
          graphdata.push(team)


      })
      // console.log(graphdata)
      Highcharts.chart('container2', {
          chart: {
              type: 'column',
             
          },
          title: {
              text: 'Number of Matches Won by team per year'
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              column: {
                  depth: 35
              }
          },
          xAxis: {
              categories: Object.keys(arr2[0])
          },
          yAxis: {
              title: {
                  text: 'Number of Matches'
              }
          },
          series: graphdata
      });

  })


}
function extraRunsin2016(){
  fetch('http://localhost:3000/extraRunsIn2016')
  .then((res) => {
      return res.json()
  })
  .then(data => {
      Highcharts.chart('container3', {
          chart: {
              type: 'column',
             
          },
          title: {
              text: 'Extra Runs in 2016'
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              column: {
                  depth: 25
              }
          },
          xAxis: {
  
              categories: Object.keys(data)
          },
          yAxis: {
              title: {
                  text: 'Runs'
              }
          },
          series: [{
              name: 'Team',
              data: Object.values(data)
          }]
      });

  })


}
function economicBowlersin2015() {
 fetch('http://localhost:3000/EconomicalBowlersForYear')
  .then((res) => {
      return res.json()
  })
  .then(data => {
      Highcharts.chart('container4', {
          chart: {
              type: 'column',
             
          },
          title: {
              text: 'Economic Bowlers In 2015'
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              column: {
                  depth: 25
              }
          },
          xAxis: {
  
              categories: Object.keys(data)
          },
          yAxis: {
              title: {
                  text: 'Economy'
              }
          },
          series: [{
              name: 'Player',
              data: Object.values(data)
          }]
      });

  })


}
numberOfMatchesPlayedPerYear();
Numberofmatcheswinbyteamperyear();
extraRunsin2016();
economicBowlersin2015();

    fetch('http://localhost:3000/numberOfmatchesWonPerTeamPerYear.JSON')
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
                    console.log(graphdata)
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
                            categories: Object.keys(arr2[2])
                        },
                        yAxis: {
                            title: {
                                text: 'Number of Matches'
                            }
                        },
                        series: graphdata
                    });

                })
    
    
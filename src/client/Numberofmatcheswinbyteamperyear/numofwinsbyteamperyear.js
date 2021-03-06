
    fetch('../../output/numberOfmatchesWonPerTeamPerYear.JSON')
                .then((res) => {
                    return res.json()
                })
                .then(data => {
                    let arr1 = Object.keys(data)
                    console.log("arr1 :",arr1)
                    let arr2 = Object.values(data)
                    console.log('arr2:',arr2)
                    graphdata = []
                    const matchesdata = arr1.map(match=>{
                        let team = { }
                        team.name = match
                        team.data = Object.values(data[match])
                        graphdata.push(team)


                    })
                    console.log("graphdata:",graphdata)
                    Highcharts.chart('container', {
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
    
    

    fetch('../../output/numberOfmatchesWonPerTeamPerYear.JSON')
                .then((res) => {
                    console.log(res)
                    return res.json()
                })
                .then(data => {
                    year = Object.keys(data)
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
                            name: 'Kolkata Knight Riders',
                            data: Object.values(data['2008'])
                        },{
                            name: "Chennai Super Kings",
                            data: Object.values(data['2009'])
                        },{
                            name: 'Kolkata Knight Riders',
                            data: Object.values(data['2008'])
                        },{
                            name: "Chennai Super Kings",
                            data: Object.values(data['2009'])
                        },{
                            name: 'Kolkata Knight Riders',
                            data: Object.values(data['2008'])
                        },{
                            name: "Chennai Super Kings",
                            data: Object.values(data['2009'])
                        },{
                            name: 'Kolkata Knight Riders',
                            data: Object.values(data['2008'])
                        },{
                            name: "Chennai Super Kings",
                            data: Object.values(data['2009'])
                        }]
                    });

                })
    
    
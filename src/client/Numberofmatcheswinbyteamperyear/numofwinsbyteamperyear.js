
    fetch('../../output/numberOfmatchesWonPerTeamPerYear.JSON')
                .then((res) => {
                    return res.json()
                })
                .then(data => {
                    let arr = Object.keys(data)
                    console.log(arr)
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
                        series: Object.values(data)
                    });

                })
    
    
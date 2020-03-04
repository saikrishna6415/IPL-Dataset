    fetch('../../output/numberOfMatchesPlayedPerYear.JSON')
                .then((res) => {
                    console.log(res)
                    return res.json()
                })
                .then(data => {
                    Highcharts.chart('container', {
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
    
    
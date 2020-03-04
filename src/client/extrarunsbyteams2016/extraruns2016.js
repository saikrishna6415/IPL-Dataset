    fetch('../../output/extraRunsIn2016.JSON')
                .then((res) => {
                    return res.json()
                })
                .then(data => {
                    Highcharts.chart('container', {
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
    
    
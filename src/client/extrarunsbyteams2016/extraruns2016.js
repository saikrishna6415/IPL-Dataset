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
    
    
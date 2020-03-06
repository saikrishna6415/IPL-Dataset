    fetch('http://localhost:3000/EconomicalBowlersForYear.JSON')
                .then((res) => {
                    console.log(res)
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
    
    
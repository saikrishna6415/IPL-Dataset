    fetch('http://localhost:3000/numberOfMatchesPlayedPerYear')
                .then((res) => {
                    console.log(res)
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
    
    
function linearInterpritationLine(inputData, labelName){
    let config = {
        type: 'line',
        data: {
            labels: inputData[1],
            datasets: [{
                label: labelName,
                borderColor: 'rgb(255, 159, 64)',
                data: inputData[0],
                backgroundColor: 'rgb(0, 0, 0, 0)',
                fill: false,
                lineTension: 0
            }]

        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Last 7 Days: ' + labelName
            },
            tooltips: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 200
                    }
                }]
            }
        }
    }
    return config;
}

function linearInterpritationLineTwoSets(inputData, labelName){
    let config = {
        type: 'line',
        data: {
            labels: inputData[1],
            datasets: [{
                label: "Your " + labelName,
                borderColor: 'rgb(255, 159, 64)',
                data: inputData[0],
                backgroundColor: 'rgb(0, 0, 0, 0)',
                fill: false,
                lineTension: 0
            },
            {
                label: "Average " + labelName,
                borderColor: 'rgb(255, 159, 64)',
                data: inputData[2],
                backgroundColor: 'rgb(0, 0, 0, 0)',
                fill: false,
                lineTension: 0
            }
            ]

        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Last 7 Days: ' + labelName
            },
            tooltips: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: "Date"
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Steps'
                    },
                    ticks: {
                        suggestedMin: 0
                    }
                }]
            }
        }
    }
    return config;
}


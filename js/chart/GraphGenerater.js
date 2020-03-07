function linearInterpritationLine(inputData, labelName){
    let config = {
        type: 'line',
        data: {
            labels: inputData[1],
            datasets: [{
                label: labelName,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 5,
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
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 5,
                data: inputData[0],
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false,
                lineTension: 0
            },
            {
                label: "Average " + labelName,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 5,
                data: inputData[2],
                backgroundColor: 'rgb(75, 192, 192)',
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

function Line(inputData, labelName){
    let config = {
        type: 'line',
        data: {
            labels: inputData[1],
            datasets: [{
                label: labelName,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 5,
                data: inputData[0],
                backgroundColor: 'rgb(0, 0, 0, 0)',
                fill: false,
                cubicInterpolationMode: 'monotone'
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

function LineTwoSets(inputData, labelName){
    let config = {
        type: 'line',
        data: {
            labels: inputData[1],
            datasets: [{
                label: "Your " + labelName,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 5,
                data: inputData[0],
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false,
                cubicInterpolationMode: 'monotone'
            },
            {
                label: "Average " + labelName,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 5,
                data: inputData[2],
                backgroundColor: 'rgb(75, 192, 192)',
                fill: false,
                cubicInterpolationMode: 'monotone'
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
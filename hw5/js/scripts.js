document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myScatterChart').getContext('2d');
    const scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset Example',
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                data: [{
                    x: -5,
                    y: 1.5
                },{
                    x: -4,
                    y: 0.5
                },{
                    x: -2,
                    y: -2
                },{
                    x: -6,
                    y: -0.5
                },{
                    x: -7,
                    y: 0
                }, {
                    x: 1,
                    y: 7
                }, {
                    x: 7,
                    y: 3
                }, {
                    x: 0.2,
                    y: 3.5
                }, {
                    x: 0.1,
                    y: 3.1
                }, {
                    x: 0,
                    y: -1
                }, {
                    x: 1.5,
                    y: 2.5
                }] 
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });
});

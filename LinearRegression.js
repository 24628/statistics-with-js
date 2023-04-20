const Plotly = require("plotly.js-dist");
const {LinearRegression} = require("shaman");

const X = [1, 2, 3, 4, 5];
const Y = [2, 2, 3, 3, 5];

const lr = new LinearRegression(X,Y);

export const resultLinearRegression = lr.train(function(err) {
    if (err) { throw err; }

    // you can now start using lr.predict:
    const predictedY = X.map(x => lr.predict(x));

    const trace1 = {
        x: X,
        y: Y,
        mode: 'markers',
        type: 'scatter',
        name: 'Data Points'
    };

    const trace2 = {
        x: X,
        y: predictedY,
        mode: 'lines',
        type: 'scatter',
        name: 'Linear Regression Line'
    };

    const layout = {
        title: 'Linear Regression with Plotly and Shaman',
        xaxis: { title: 'X' },
        yaxis: { title: 'Y' }
    };

    const data = [trace1, trace2];

    let div = document.getElementById('linear');
    Plotly.newPlot(div, data, layout);
});


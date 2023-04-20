import { LinearRegression } from 'shaman';
import Plotly from 'plotly.js-dist';

export const generateDataAndPlot = (numPoints, trueSlope, trueIntercept, numOutliers, outlierRange ) => {
    // Generate random data points
    const X = [];
    const Y = [];
    for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * 10;
        const y = trueSlope * x + trueIntercept + (Math.random() - 0.5) * 2; // Add random noise
        X.push(x);
        Y.push(y);
    }

    // Generate outliers
    for (let i = 0; i < numOutliers; i++) {
        const x = Math.random() * outlierRange; // Outliers are generated within a specified range
        const y = Math.random() * outlierRange * 5; // Outliers have larger y-values
        X.push(x);
        Y.push(y);
    }

    // Perform linear regression
    const lr = new LinearRegression(X, Y);
    lr.train(function(err) {
        if (err) { throw err; }

        // Get the predicted values for X
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
};

// Call the function with desired parameters


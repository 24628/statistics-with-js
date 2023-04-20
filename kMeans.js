const KMeans = require('shaman').KMeans;
const Plotly = require('plotly.js-dist');

const data = [];
for (let i = 0; i < 100; i++) {
    const x = Math.random() * 10;
    const y = Math.random() * 10;
    data.push([x, y]);
}

const kMeans = new KMeans(5, {
    iterations: 20,
});


export const resultKMeans = kMeans.cluster(data, function(err, clusters, centroids) {
    if (err) { throw err; }

    let dataArr = [];

    clusters.forEach(arr => {
        const x = arr.map(point => point[0]);
        const y = arr.map(point => point[1]);

        dataArr.push({
            x: x,
            y: y,
            mode: 'markers',
            marker: {
                size: 8,
            },
            type: 'scatter',
        });
    })

    const centroidsX = centroids.map(centroid => centroid[0]);
    const centroidsY = centroids.map(centroid => centroid[1]);

    const trace2 = {
        x: centroidsX,
        y: centroidsY,
        mode: 'markers',
        marker: {
            color: 'red',
            size: 12,
            symbol: 'star',
        },
        type: 'scatter',
    };

    const layout = {
        title: 'K-Means Clustering',
        xaxis: { title: 'X' },
        yaxis: { title: 'Y' },
    };

    dataArr.push(trace2);
    let div = document.getElementById('kMeans');
    Plotly.newPlot(div, dataArr, layout);
});



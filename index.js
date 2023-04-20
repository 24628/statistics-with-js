import {resultKMeans} from './kMeans.js'
import {generateDataAndPlot} from './LinearRegression'

console.log(resultKMeans)

const numPoints = 50; // Number of data points to generate
const trueSlope = 2; // True slope of the linear regression line
const trueIntercept = 1; // True intercept of the linear regression line

generateDataAndPlot(numPoints, trueSlope, trueIntercept);
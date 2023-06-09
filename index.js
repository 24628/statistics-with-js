import {resultKMeans} from './kMeans.js'
import {generateDataAndPlot} from './LinearRegression'
import {test} from "./classificator";

console.log(resultKMeans)
console.log(test)

const numPoints = 50;
const trueSlope = 2;
const trueIntercept = 1;
const numOutliers = 2;
const outlierRange  = 5;

generateDataAndPlot(numPoints, trueSlope, trueIntercept, numOutliers, outlierRange);
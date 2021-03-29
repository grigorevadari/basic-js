const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if(str === undefined || typeof str !== "string") {
    return false;
  }
  let N = Number(str);
  if ( isNaN(N) || N === Infinity || N<=0 || N>15){
    return false;
  }
  let ln = Math.log(MODERN_ACTIVITY/N);
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = ln/k;
  t=Math.ceil(t);
  return t;
}

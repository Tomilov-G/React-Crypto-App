export function percentDifference(a, b) {
    return +(100 * Math.abs((a - b) / ((a + b) / 2)).toFixed(4));
  }

export function capitalize(str) {
   return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
}
  
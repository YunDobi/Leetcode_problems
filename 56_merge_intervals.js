
const merge = function(intervals) {
  let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
  //console.log(sortedIntervals);

  let mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  //console.log(mergedIntervals);

  for (let nextInterval of sortedIntervals) {
    let [_, currentIntervalEnd] = currentInterval;
    let [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      //console.log(currentInterval[1]);
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
  =    mergedIntervals.push(currentInterval);
    }
}

  return mergedIntervals;

};
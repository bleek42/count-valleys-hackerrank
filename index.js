function countingValleys(steps, path) {
  if (isNaN(steps)) throw new TypeError('first input is NaN!');
  if (typeof path !== 'string') throw new TypeError('second input is not a string!');

  let elevation = 0;
  let valleysTraversed = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === 'D') {
      --elevation;
    }
    else if (path[i] === 'U') {
      if (++elevation === 0) valleysTraversed++;
    }
  }

  return valleysTraversed;
}

const mySteps = 20;
const myPath = 'UDDDUDUUUUDDDUDUDUUU';

console.log(countingValleys(mySteps, myPath)); // 4 valleys traversed
const { isRightTriangle, getUniqueTriangles } = require("./src/geometry");

const trianglesCount = 10000;

const lowerBound = 1;
const upperBound = 3;

let unique = [];

let counter = 0;

let a = lowerBound;
let b = lowerBound;
let c = lowerBound;

const triade = [lowerBound, lowerBound, lowerBound];

while (counter <= trianglesCount) {
  console.log(triade);
  counter++;

  triade[2]++;
  if (triade[2] > upperBound) {
    triade[2] = lowerBound;
    triade[1]++;
    if (triade[1] > upperBound) {
      triade[1] = lowerBound;
      triade[0]++;
      if (triade[0] > upperBound) {
        break;
      }
    }
  }
}

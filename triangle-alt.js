const { range } = require("./src/util");
const { isRightTriangle, getUniqueTriangles } = require("./src/geometry");
const { getPositiveAnswerPhrase } = require("./src/output");

const lowerBound = 1;
const upperBound = 30;

const nextCombination = (values, lower, upper) => {
  let needToIncrease = true;
  const res = Array.from(values);

  for (let i = values.length - 1; i > 0; i--) {
    if (needToIncrease) {
      res[i] = values[i] + 1;
      needToIncrease = false;
    }

    if (res[i] > upper) {
      res[i] = lower;
      needToIncrease = true;
    }
  }

  if (needToIncrease) {
    res[0] = values[0] + 1;

    if (res[0] > upper) {
      return null;
    }
  }

  return res;
};

let s = [lowerBound, lowerBound, lowerBound];
let found = 0;

while (s !== null) {
  const triangle = [
    {
      sideName: "a",
      sideLength: s[0],
    },
    {
      sideName: "b",
      sideLength: s[1],
    },
    {
      sideName: "c",
      sideLength: s[2],
    },
  ];

  if (isRightTriangle(triangle)) {
    console.log(s);
    found++;

    if (found === 10) break;
  }

  s = nextCombination(s, lowerBound, upperBound);
}

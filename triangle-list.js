const { range } = require("./src/util");
const { isRightTriangle, getUniqueTriangles } = require("./src/geometry");
const { getPositiveAnswerPhrase } = require("./src/output");

const lowerBound = 1;
const upperBound = 30;

const numbers = range(lowerBound, upperBound);

const numberTriades = numbers
  .map((a) => numbers.map((b) => numbers.map((c) => [a, b, c])))
  .flat(2);

const names = ["a", "b", "c"];

const objectTriades = numberTriades.map((triade) =>
  triade.map((number, index) => ({
    sideName: `${names[index]}`,
    sideLength: number,
  }))
);

const triangles = objectTriades.filter((triade) => isRightTriangle(triade));

const unique = getUniqueTriangles(triangles);

unique.forEach((triangle) => console.log(getPositiveAnswerPhrase(triangle)));

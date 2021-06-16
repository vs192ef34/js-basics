const { range } = require("./src/util");
const { isTriangle } = require("./src/geometry");
const { getPositiveAnswerPhrase } = require("./src/output");

const limit = 10;

const numbers = range(1, limit);

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

const triangles = objectTriades.filter((triade) => isTriangle(triade));

triangles.forEach((triangle) => console.log(getPositiveAnswerPhrase(triangle)));

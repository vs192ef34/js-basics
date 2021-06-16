const { getHelpText, validateTriangle } = require("./src/validation");
const isTriangle = require("./src/geometry");
const getAnswerPhrase = require("./src/output");

const sides = [
  { sideName: "a", sideLength: -8 },
  { sideName: "b", sideLength: 400 },
  { sideName: "c", sideLength: 500 },
];

const lowerBound = 0;
const upperBound = 74;

const validationResult = validateTriangle(sides, lowerBound, upperBound);

if (!validationResult.isValid) {
  console.log(validationResult.errorMessages.join("\n"));
  console.log(getHelpText(lowerBound, upperBound));
  return;
}

const answer = isTriangle(sides);

console.log(getAnswerPhrase(sides, answer));

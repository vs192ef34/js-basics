const answerToText = (answer) => (answer ? "можно" : "нельзя");

const sideToText = (side) => `"${side.sideName}" = ${side.sideLength}`;

const triangleToText = (sides) =>
  sides.map((side) => sideToText(side)).join(", ");

const getAnswerPhrase = (sides, answer) =>
  `На сторонах: ${triangleToText(sides)} ${answerToText(
    answer
  )} посторить треугольник.`;

exports.getAnswerPhrase = getAnswerPhrase;

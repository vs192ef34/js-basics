const checkTriangleSides = (a, b, c) => a + b > c && b + c > a && a + c > b;

const isTriangle = (sides) =>
  checkTriangleSides(
    sides[0].sideLength,
    sides[1].sideLength,
    sides[2].sideLength
  );

exports.isTriangle = isTriangle;

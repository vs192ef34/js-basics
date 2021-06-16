const fullTest = (n) => (n % 3 === 0 && n % 5 === 0 ? "FizzBuzz" : "");
const threeTest = (n) => (n % 3 === 0 ? "Fizz" : "");
const fiveTest = (n) => (n % 5 === 0 ? "Buzz" : "");
const numberTest = (n) => `${n}`;

const test = [fullTest, threeTest, fiveTest, numberTest];

const convertToFizzBuzz = (testFunctions, number) =>
  testFunctions
    .map((testFunction) => testFunction(number))
    .find((resultText) => resultText.length !== 0);

const results = [...Array(100).keys()]
  .map((index) => index + 1)
  .map((n) => ({
    number: n,
    fizzBuzz: convertToFizzBuzz(test, n),
  }));

results
  .filter((item) => !(item.fizzBuzz[0] === "B" || item.fizzBuzz[0] === "F"))
  .forEach((item) => {
    const { number, fizzBuzz } = item;
    console.log(`${number}: ${fizzBuzz}`);
  });

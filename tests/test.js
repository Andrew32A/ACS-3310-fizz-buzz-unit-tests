const fb = require("../fizzbuzz");

// Challenge 1: Write a test for each of the constants
const {
  FIZZ,
  BUZZ,
  FIZZBUZZ,
  fizzyBuzzy,
  isBuzzy,
  fizzBuzz,
} = require("../fizzbuzz");

test('Constant FIZZ equals "fizz"', () => {
  expect(FIZZ).toBe("fizz");
});

test('Constant BUZZ equals "buzz"', () => {
  expect(BUZZ).toBe("buzz");
});

test('Constant FIZZBUZZ equals "fizzbuzz"', () => {
  expect(FIZZBUZZ).toBe("fizzbuzz");
});

// Challenge 2: This takes a number and returns true if the number is divisible by 3.
const { isFizzy } = require("../fizzbuzz");

test("isFizzy returns true for numbers divisible by 3", () => {
  expect(isFizzy(3)).toBe(true);
  expect(isFizzy(6)).toBe(true);
});

test("isFizzy returns false for numbers not divisible by 3", () => {
  expect(isFizzy(4)).toBe(false);
  expect(isFizzy(7)).toBe(false);
});

// Challenge 3: This function takes n as a parameter and returns true if the number is divisible by 5

test("isBuzzy returns true for numbers divisible by 5", () => {
  expect(isBuzzy(5)).toBe(true);
  expect(isBuzzy(10)).toBe(true);
});

test("isBuzzy returns false for numbers not divisible by 5", () => {
  expect(isBuzzy(6)).toBe(false);
  expect(isBuzzy(7)).toBe(false);
});

// Challenge 4: This function takes the parameter n and returns a string, 'fizz' if n is divisble by 3, 'buzz' if n is divisble by 5, and fizzbuzz if divisible by both 3 and 5

test("fizzyBuzzy returns correct strings", () => {
  expect(fizzyBuzzy(3)).toBe(FIZZ);
  expect(fizzyBuzzy(5)).toBe(BUZZ);
  expect(fizzyBuzzy(15)).toBe(FIZZBUZZ);
  expect(fizzyBuzzy(7)).toBe("");
});

// Challenge 5: This function takes a Number count and returns an Object with details about the fizzy and buzziness of the count
test("fizzBuzz returns correct object", () => {
  const result = fizzBuzz(5);
  expect(result.count).toBe(5);
  expect(result.fizz).toBe(1);
  expect(result.buzz).toBe(1);
  expect(result.fizzBuzz).toBe(0);
});

// unit.test.js

const { exportAllDeclaration } = require("@babel/types");
const { TestWatcher } = require("@jest/core");
const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

//isPhoneNumber tests
test("123-456-7990 is a phone number", () => {
  let solution = functions.isPhoneNumber("123-456-7990");
  expect(solution).toBe(true);
});

test("858-444-3232 is a phone number", () => {
  let solution = functions.isPhoneNumber("858-444-3232");
  expect(solution).toBe(true);
});

test("1235465496 is not a phone number", () => {
  let solution = functions.isPhoneNumber("1235465496");
  expect(solution).toBe(false);
});

test("Oliver is not a phone number", () => {
  let solution = functions.isPhoneNumber("Oliver");
  expect(solution).toBe(false);
});

// isEmail() tests
test("okorchno@ucsd.edu is an email", () => {
  let solution = functions.isEmail("okorchno@ucsd.edu");
  expect(solution).toBe(true);
});

test("JohnSmith@gmail.com is an email", () => {
  let solution = functions.isEmail("JohnSmith@gmail.com");
  expect(solution).toBe(true);
});

test("OGK is not an email", () => {
  let solution = functions.isEmail("OGK");
  expect(solution).toBe(false);
});

test("888765 is not an email", () => {
  let solution = functions.isEmail("888765");
  expect(solution).toBe(false);
});

//isStrongPassword() tests

test("Oliver_10 is a strong password", () => {
  let solution = functions.isStrongPassword("Oliver_10");
  expect(solution).toBe(true);
});

test("Password10 is a strong password", () => {
  let solution = functions.isStrongPassword("Password10");
  expect(solution).toBe(true);
});

test("100OGK is not a strong password", () => {
  let solution = functions.isStrongPassword("100OGK");
  expect(solution).toBe(false);
});

test("Oliver78910111213141516161617 is not a strong password", () => {
  let solution = functions.isStrongPassword("Oliver78910111213141516161617");
  expect(solution).toBe(false);
});

// isDate() tests

test("11/14/2021 is a date", () => {
  let solution = functions.isDate("11/14/2021");
  expect(solution).toBe(true);
});

test("12/10/2022 is a date", () => {
  let solution = functions.isDate("12/10/2022");
  expect(solution).toBe(true);
});

test("Oliver is not a date", () => {
  let solution = functions.isDate("Oliver");
  expect(solution).toBe(false);
});

test("11/14 is not a date", () => {
  let solution = functions.isDate("11/14");
  expect(solution).toBe(false);
});

//isHexColor() test

test("#333 is a Hex Value", () => {
  let solution = functions.isHexColor("#333");
  expect(solution).toBe(true);
});

test("#A333F3 is a Hex Value", () => {
  let solution = functions.isHexColor("#333333");
  expect(solution).toBe(true);
});

test("#33 is not a Hex Value", () => {
  let solution = functions.isHexColor("#33");
  expect(solution).toBe(false);
});

test("#A1345 is not a Hex Value", () => {
  let solution = functions.isHexColor("#A1345");
  expect(solution).toBe(false);
});

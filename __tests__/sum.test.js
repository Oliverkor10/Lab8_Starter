// sum.test.js

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  function sum(a, b) {
    return a + b;
  }
  expect(sum(1, 2)).toBe(3);
});

"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateDiscount } = require("../src/discountcalculator");

test("calculates a valid discount", () => {
  assert.equal(calculateDiscount(100, 20), 80);
});

test("accepts the percentage boundaries", () => {
  assert.equal(calculateDiscount(100, 0), 100);
  assert.equal(calculateDiscount(100, 100), 0);
});

test("rejects non-finite and non-number inputs", () => {
  for (const values of [
    [NaN, 20],
    [Infinity, 20],
    [100, NaN],
    [100, Infinity],
    ["100", 20],
  ]) {
    assert.throws(
      () => calculateDiscount(...values),
      { name: "TypeError", message: "Price and discount must be finite numbers." }
    );
  }
});

test("rejects a negative price", () => {
  assert.throws(
    () => calculateDiscount(-20, 10),
    { name: "RangeError", message: "Price cannot be negative." }
  );
});

test("rejects percentages outside 0 to 100", () => {
  for (const discount of [-5, 120]) {
    assert.throws(
      () => calculateDiscount(100, discount),
      { name: "RangeError", message: "Discount must be between 0 and 100." }
    );
  }
});

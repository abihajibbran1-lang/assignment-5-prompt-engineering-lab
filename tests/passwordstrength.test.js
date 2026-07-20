"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { checkPasswordStrength } = require("../src/passwordstrength");

const cases = [
  { password: "", score: 0, strength: "Weak" },
  { password: null, score: 0, strength: "Weak" },
  { password: "abc", score: 2, strength: "Weak" },
  { password: "Pass word1!", score: 5, strength: "Medium" },
  { password: "Abcdef1!", score: 6, strength: "Strong" },
  { password: "Abcdefg1", score: 5, strength: "Medium" },
  { password: "Secure#123", score: 6, strength: "Strong" },
];

for (const testCase of cases) {
  test(`classifies ${JSON.stringify(testCase.password)} as ${testCase.strength}`, () => {
    const result = checkPasswordStrength(testCase.password);

    assert.equal(result.score, testCase.score);
    assert.equal(result.strength, testCase.strength);
    assert.equal(typeof result.checks, "object");
    assert.ok(Array.isArray(result.feedback));
  });
}

test("provides explicit feedback when a password contains whitespace", () => {
  const result = checkPasswordStrength("Pass word1!");

  assert.equal(result.checks.hasNoWhitespace, false);
  assert.ok(result.feedback.includes("Remove spaces and other whitespace."));
});

"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { analyzeText } = require("../src/textanalyser");

test("analyzes simple text", () => {
  assert.deepEqual(analyzeText("Hello world."), {
    characters: 12,
    charactersWithoutWhitespace: 11,
    words: 2,
    sentences: 1,
    vowels: 3,
    averageWordLength: 5,
  });
});

test("handles an empty string", () => {
  assert.deepEqual(analyzeText(""), {
    characters: 0,
    charactersWithoutWhitespace: 0,
    words: 0,
    sentences: 0,
    vowels: 0,
    averageWordLength: 0,
  });
});

test("preserves whitespace character counts", () => {
  assert.deepEqual(analyzeText("  \n "), {
    characters: 4,
    charactersWithoutWhitespace: 0,
    words: 0,
    sentences: 0,
    vowels: 0,
    averageWordLength: 0,
  });
});

test("preserves punctuation-only token behavior", () => {
  assert.deepEqual(analyzeText("!!!"), {
    characters: 3,
    charactersWithoutWhitespace: 3,
    words: 1,
    sentences: 1,
    vowels: 0,
    averageWordLength: 0,
  });
});

test("handles multiple spaces and newlines", () => {
  assert.deepEqual(analyzeText("Hello   world\nagain!"), {
    characters: 20,
    charactersWithoutWhitespace: 16,
    words: 3,
    sentences: 1,
    vowels: 6,
    averageWordLength: 5,
  });
});

test("rounds average word length to two decimal places", () => {
  assert.equal(analyzeText("a bb cccc").averageWordLength, 2.33);
});

test("returns a structured error for non-string input", () => {
  assert.deepEqual(analyzeText(null), {
    error: "Text must be a string.",
  });
});

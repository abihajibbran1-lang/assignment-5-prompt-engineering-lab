"use strict";

/**
 * Analyzes basic text statistics without accessing the DOM.
 *
 * Existing behavior is preserved: words are whitespace-separated tokens,
 * and consecutive sentence punctuation is counted as one sentence ending.
 *
 * @param {*} text The value to analyze.
 * @returns {object} Text metrics, or a structured error for invalid input.
 */
function analyzeText(text) {
  if (typeof text !== "string") {
    return { error: "Text must be a string." };
  }

  const trimmedText = text.trim();
  const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
  const sentenceMatches = text.match(/[.!?]+/g) || [];
  const vowelMatches = text.match(/[aeiou]/gi) || [];
  const letters = words.join("").replace(/[^A-Za-z]/g, "");
  const unroundedAverage =
    words.length === 0 ? 0 : letters.length / words.length;

  return {
    characters: text.length,
    charactersWithoutWhitespace: text.replace(/\s/g, "").length,
    words: words.length,
    sentences: trimmedText === "" ? 0 : sentenceMatches.length,
    vowels: vowelMatches.length,
    averageWordLength: Number(unroundedAverage.toFixed(2)),
  };
}

module.exports = { analyzeText };

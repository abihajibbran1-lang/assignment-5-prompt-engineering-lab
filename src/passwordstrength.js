"use strict";

/**
 * Evaluates a password against six basic strength rules.
 * This is a helpful form check, not a guarantee of real-world security.
 *
 * @param {*} password The value to evaluate.
 * @returns {{
 *   score: number,
 *   strength: "Weak"|"Medium"|"Strong",
 *   checks: {
 *     minimumLength: boolean,
 *     hasUppercase: boolean,
 *     hasLowercase: boolean,
 *     hasNumber: boolean,
 *     hasSpecialCharacter: boolean,
 *     hasNoWhitespace: boolean
 *   },
 *   feedback: string[]
 * }}
 */
function checkPasswordStrength(password) {
  const isNonEmptyString = typeof password === "string" && password.length > 0;

  const checks = {
    minimumLength: isNonEmptyString && password.length >= 8,
    hasUppercase: isNonEmptyString && /[A-Z]/.test(password),
    hasLowercase: isNonEmptyString && /[a-z]/.test(password),
    hasNumber: isNonEmptyString && /[0-9]/.test(password),
    hasSpecialCharacter:
      isNonEmptyString && /[^A-Za-z0-9\s]/.test(password),
    hasNoWhitespace: isNonEmptyString && !/\s/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;
  let strength = "Weak";

  if (score === 6) {
    strength = "Strong";
  } else if (score >= 4) {
    strength = "Medium";
  }

  const feedback = [];

  if (typeof password !== "string") {
    feedback.push("Password must be a string.");
  } else if (password.length === 0) {
    feedback.push("Password cannot be empty.");
  } else {
    if (!checks.minimumLength) {
      feedback.push("Use at least 8 characters.");
    }
    if (!checks.hasUppercase) {
      feedback.push("Add an uppercase letter.");
    }
    if (!checks.hasLowercase) {
      feedback.push("Add a lowercase letter.");
    }
    if (!checks.hasNumber) {
      feedback.push("Add a number.");
    }
    if (!checks.hasSpecialCharacter) {
      feedback.push("Add a special character.");
    }
    if (!checks.hasNoWhitespace) {
      feedback.push("Remove spaces and other whitespace.");
    }
  }

  return { score, strength, checks, feedback };
}

module.exports = { checkPasswordStrength };

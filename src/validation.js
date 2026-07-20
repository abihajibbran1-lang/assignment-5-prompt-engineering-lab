"use strict";

const { checkPasswordStrength } = require("./passwordstrength");

function isEmpty(value) {
  return typeof value !== "string" || value.trim() === "";
}

function validateName(name) {
  if (isEmpty(name)) {
    return ["Name is required."];
  }

  return [];
}

function validateEmail(email) {
  if (isEmpty(email)) {
    return ["Email is required."];
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return ["Enter a valid email address."];
  }

  return [];
}

function validatePhone(phone) {
  if (isEmpty(phone)) {
    return ["Phone number is required."];
  }

  const phonePattern = /^\d{10,15}$/;

  if (!phonePattern.test(phone)) {
    return ["Phone number must contain 10 to 15 digits only."];
  }

  return [];
}

function validatePassword(password) {
  if (isEmpty(password)) {
    return ["Password is required."];
  }

  const passwordResult = checkPasswordStrength(password);

  if (passwordResult.strength !== "Strong") {
    return [
      "Password must meet all strength requirements.",
      ...passwordResult.feedback,
    ];
  }

  return [];
}

function validatePasswordConfirmation(password, confirmPassword) {
  if (isEmpty(confirmPassword)) {
    return ["Password confirmation is required."];
  }

  if (password !== confirmPassword) {
    return ["Passwords do not match."];
  }

  return [];
}

/**
 * Validates registration data without accessing the browser or DOM.
 *
 * @param {*} formData Values for name, email, phone, password, and
 * confirmPassword.
 * @returns {{isValid: boolean, errors: Object<string, string[]>}}
 */
function validateForm(formData) {
  if (formData === null || typeof formData !== "object" || Array.isArray(formData)) {
    return {
      isValid: false,
      errors: { form: ["Form data must be an object."] },
    };
  }

  const errors = {};
  const fieldErrors = {
    name: validateName(formData.name),
    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
    password: validatePassword(formData.password),
    confirmPassword: validatePasswordConfirmation(
      formData.password,
      formData.confirmPassword
    ),
  };

  for (const [field, messages] of Object.entries(fieldErrors)) {
    if (messages.length > 0) {
      errors[field] = messages;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = {
  isEmpty,
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validatePasswordConfirmation,
  validateForm,
};

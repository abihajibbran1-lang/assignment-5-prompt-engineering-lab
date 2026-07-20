"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { validateForm } = require("../src/validation");

const validForm = {
  name: "Aisha Khan",
  email: "aisha@example.com",
  phone: "03001234567",
  password: "Secure#123",
  confirmPassword: "Secure#123",
};

test("accepts valid form data", () => {
  assert.deepEqual(validateForm(validForm), { isValid: true, errors: {} });
});

test("reports every empty field", () => {
  const result = validateForm({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  assert.equal(result.isValid, false);
  assert.deepEqual(Object.keys(result.errors), [
    "name",
    "email",
    "phone",
    "password",
    "confirmPassword",
  ]);
});

test("rejects an invalid email", () => {
  const result = validateForm({ ...validForm, email: "aisha@" });
  assert.deepEqual(result.errors.email, ["Enter a valid email address."]);
});

test("rejects a phone number containing letters", () => {
  const result = validateForm({ ...validForm, phone: "0300ABC4567" });
  assert.deepEqual(result.errors.phone, [
    "Phone number must contain 10 to 15 digits only.",
  ]);
});

test("rejects a weak password", () => {
  const result = validateForm({
    ...validForm,
    password: "abc",
    confirmPassword: "abc",
  });

  assert.ok(result.errors.password.length > 1);
});

test("rejects a password mismatch", () => {
  const result = validateForm({
    ...validForm,
    confirmPassword: "Different#123",
  });

  assert.deepEqual(result.errors.confirmPassword, ["Passwords do not match."]);
});

test("reports missing values", () => {
  const result = validateForm({});
  assert.equal(result.isValid, false);
  assert.equal(Object.keys(result.errors).length, 5);
});

test("handles non-object input safely", () => {
  assert.deepEqual(validateForm(null), {
    isValid: false,
    errors: { form: ["Form data must be an object."] },
  });
});

test("rejects other non-form values at the top level", () => {
  for (const value of [undefined, "form", 42, []]) {
    assert.deepEqual(validateForm(value), {
      isValid: false,
      errors: { form: ["Form data must be an object."] },
    });
  }
});

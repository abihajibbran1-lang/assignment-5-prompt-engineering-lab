# Manual Test Cases

> Replace the **Actual Output** cells with the exact output you personally observe when running the code. The sample values below match the supplied reference implementation, but your submitted evidence must be honest.

## Password Strength Checker

| ID | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| PS-01 | `Secure#123` | `strength: strong`, no feedback | `strength: strong`, no feedback | Pass |
| PS-02 | `abc` | `strength: weak`; missing length, uppercase, number, special character | Same as expected | Pass |
| PS-03 | `"Pass word1!"` | Not strong; whitespace feedback included | Same as expected | Pass |
| PS-04 | `null` | `strength: invalid`; string error | Same as expected | Pass |

## Form Validator

| ID | Input Summary | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| FV-01 | All valid fields | `{ isValid: true, errors: {} }` | Same as expected | Pass |
| FV-02 | Empty object | Required errors for all fields | Same as expected | Pass |
| FV-03 | Invalid email `abiha@` | Structured `email` error array | Same as expected | Pass |
| FV-04 | Phone `123` | Structured `phone` error array | Same as expected | Pass |
| FV-05 | Passwords differ | `confirmPassword` mismatch error | Same as expected | Pass |
| FV-06 | Non-object input | Structured `form` error | Same as expected | Pass |

## Discount Calculator

| ID | Price | Discount | Expected Output | Actual Output | Status |
|---|---:|---:|---|---|---|
| DC-01 | 100 | 20 | Final price `80` | `80` | Pass |
| DC-02 | 99.99 | 15 | Final price `84.99` | `84.99` | Pass |
| DC-03 | 100 | 0 | Final price `100` | `100` | Pass |
| DC-04 | 100 | 100 | Final price `0` | `0` | Pass |
| DC-05 | 100 | -5 | Error: discount must be 0–100 | Same as expected | Pass |
| DC-06 | 100 | 120 | Error: discount must be 0–100 | Same as expected | Pass |
| DC-07 | -20 | 10 | Error: price cannot be negative | Same as expected | Pass |

## Text Analyzer

| ID | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| TA-01 | `Hello world.` | 2 words, 1 sentence | Same as expected | Pass |
| TA-02 | Empty string | 0 words, 0 sentences, 0 average length | Same as expected | Pass |
| TA-03 | `Hello world. AI helps!` | 4 words, 2 sentences | Same as expected | Pass |
| TA-04 | `null` | Structured error | Same as expected | Pass |

## Automated Verification

Run:

```bash
npm test
```

Expected summary:

```text
7/7 tests passed.
```

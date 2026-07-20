# AI Usage Report

> **Integrity note:** This report records the Codex work performed in the
> current assignment session. Token telemetry was not available in the
> interface, so all token figures below are explicitly labelled estimates.

## Mission-by-Mission Report

| Mission | AI Tool Used | Prompt Type | AI Helped With | Actual AI Mistake / Limitation | Correction |
|---|---|---|---|---|---|
| 1. Prompt comparison | OpenAI Codex | Weak, improved, and professional prompts | Created and tested a reusable password-strength checker | An early version returned only `Weak`, `Medium`, or `Strong`, which did not satisfy the later structured-object requirement | Replaced it with a result containing `score`, `strength`, `checks`, and `feedback`; added seven tests |
| 2. Code generation | OpenAI Codex | Constraint-based professional prompt | Created reusable field validators and a structured `validateForm` result without DOM access | The first automated run covered the requested examples but did not explicitly test every kind of invalid top-level form value | Added top-level form-object validation and tests for `null`, `undefined`, strings, numbers, and arrays |
| 3. Debugging | OpenAI Codex | Minimal reproduction with expected and actual results | Found that the discount was added instead of subtracted and changed `+` to `-` | The initial minimal fix corrected the formula but still accepted negative, excessive, nonnumeric, `NaN`, and infinite values | Added `Number.isFinite` checks, price and percentage boundaries, and five automated test groups |
| 4. Refactoring | OpenAI Codex | Behavior-preserving refactoring prompt | Replaced unclear names, `var`, loose equality, and repeated expressions in the text analyzer | The source later contained the original unexported `function a(t)`, causing all six analyzer tests to fail with `analyzeText is not a function`; the initial refactor also did not apply the documented two-decimal rounding rule | Restored and exported `analyzeText`, added two-decimal rounding, and added a rounding regression test |
| 5. Code review | OpenAI Codex | Strict pre-merge review prompt | Reviewed correctness, portability, validation, maintainability, and test gaps | Some review suggestions, such as renaming every file immediately, were not necessary to apply as part of the requested three fixes | Applied the discount guards; confirmed and tested existing form-object validation and password whitespace feedback; rejected framework-style rewrites |
| 6. Responsible AI | OpenAI Codex | Report-completion prompt | Updated this report using session evidence and separated automated from manual verification | Exact token telemetry was unavailable, so an exact total could not be responsibly claimed | Recorded a transparent estimate and documented the limitation |

## Token Usage

The values below estimate the substantive prompt, response, code, test output,
and repository context processed during this session. They are not billing or
API-dashboard measurements.

| Mission | AI Tool | Estimated Input Tokens | Estimated Output Tokens | Estimated Total | Exact/Estimated | Token Efficiency Note |
|---|---|---:|---:|---:|---|---|
| Mission 1 | OpenAI Codex | 4,500 | 1,800 | 6,300 | Estimated | Requirements were refined over several password-checker prompts and verified with Node.js. |
| Mission 2 | OpenAI Codex | 4,500 | 1,700 | 6,200 | Estimated | One structured prompt covered implementation, examples, and edge cases. |
| Mission 3 | OpenAI Codex | 2,500 | 900 | 3,400 | Estimated | A minimal reproduction isolated the arithmetic bug; review later added boundary validation. |
| Mission 4 | OpenAI Codex | 4,500 | 1,600 | 6,100 | Estimated | Six failures were reproduced before restoring the export and rounding behavior. |
| Mission 5 | OpenAI Codex | 4,500 | 1,700 | 6,200 | Estimated | Review findings were prioritized and only three selected changes were applied. |
| Mission 6 | OpenAI Codex | 2,500 | 1,100 | 3,600 | Estimated | Existing session evidence was consolidated without inventing exact telemetry. |
| Repository sync, test guidance, and verification support | OpenAI Codex | 2,000 | 1,000 | 3,000 | Estimated | Includes branch synchronization, run instructions, and repeated test verification. |

**Estimated Total Tokens Used:** approximately **34,800 tokens**

**Exact Total:** unavailable in the current interface. Use the OpenAI usage
dashboard, API response usage fields, or a screenshot from the tool if your
course requires an exact figure.

## Token Efficiency Reflection

Detailed prompts with roles, constraints, output formats, edge cases, and
verification instructions reduced ambiguity. Small fixes were preferred over
full rewrites: the discount formula changed from addition to subtraction, then
received focused guard clauses after review. Automated tests were rerun after
each material change. Some regeneration still occurred when requirements became
more specific and when the text analyzer reverted to an unexported version.

## Verification Statement

Codex executed the current automated suite after the selected review fixes. The
latest observed result was **29 tests passed and 0 failed**. The student must
still personally run `npm test`, complete the manual cases, review the resulting
files, and record screenshots before claiming personal verification.

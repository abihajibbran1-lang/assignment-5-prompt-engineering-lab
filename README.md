# Assignment 5 — Prompt Engineering Battle Lab

## Objective
This repository demonstrates controlled AI-assisted software engineering through six missions: prompt comparison, constraint-based generation, context-rich debugging, behavior-preserving refactoring, AI code review, and responsible AI policy writing.

The repository follows the required lifecycle for every mission:

```text
Issue → Branch → Commit(s) → Pull Request → Review → Merge → Issue Closed
```

## Tools Used
Replace with the tools you actually used, for example:
- VS Code
- Git and GitHub
- Node.js
- Cursor

## Repository Structure

```text
.
├── README.md
├── .gitignore
├── package.json
├── ai-usage-report.md
├── responsible-ai-policy.md
├── prompts/
│   ├── 01-bad-vs-good-prompts.md
│   ├── 02-code-generation-prompts.md
│   ├── 03-debugging-prompts.md
│   ├── 04-refactoring-prompts.md
│   ├── 05-code-review-prompts.md
│   └── 06-responsible-ai-prompts.md
├── src/
│   ├── passwordStrength.js
│   ├── validator.js
│   ├── discountCalculator.js
│   └── textAnalyzer.js
├── tests/
│   ├── manual-test-cases.md
│   └── run-tests.js
├── screenshots/
└── .github/
    └── pull_request_template.md
```

## Prompting Techniques
- Progressive prompt improvement: bad → better → professional
- Role, task, context, constraints, output format, edge cases, and verification
- Minimal reproducible debugging context
- Prioritized code review with reproducible findings
- Responsible-AI risk and disclosure requirements

## How to Run
Requirements: Node.js installed.

```bash
npm test
```

You can also inspect functions in Node:

```bash
node
```

```js
const { calculateDiscount } = require('./src/discountCalculator');
calculateDiscount(100, 20);
```

## Testing
- Automated reference tests: `tests/run-tests.js`
- Required manual evidence: `tests/manual-test-cases.md`
- Record input, expected output, actual output, and status.

## AI Mistakes and Manual Fixes
Examples in the reference solution include:
- incomplete invalid-input handling;
- overwritten field errors;
- missing discount boundaries;
- silent behavior changes during refactoring;
- overly broad code-review suggestions.

The final submitted report must describe the mistakes actually produced by your AI sessions, not invented ones.

## GitHub Workflow
Six issues, at least six branches, six PRs, at least ten meaningful commits, one external review, and one PR update after feedback are required. Do not commit directly to `main` after setup.

See [`WORKFLOW-GUIDE.md`](WORKFLOW-GUIDE.md) for exact issue bodies, branch commands, commit plan, PR descriptions, screenshots, and viva preparation.

## Learning Summary
Professional prompts reduce ambiguity and unnecessary regeneration, but detailed prompts do not remove the need for human verification. AI output must be tested against requirements and edge cases, selectively corrected, documented honestly, and merged through a traceable review workflow.

## Integrity Reminder
This repository is a guidance/reference package. Replace placeholders with your real GitHub links, reviewer, screenshots, observed outputs, AI mistakes, and token usage. Never fabricate evidence.

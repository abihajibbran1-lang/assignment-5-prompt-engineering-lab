# Exact GitHub Workflow Guide

## 0. Create the Repository
Name: `assignment-5-prompt-engineering-lab`

Description:

```text
Six-mission prompt engineering lab demonstrating AI-assisted code generation, debugging, refactoring, review, verification, and responsible AI usage.
```

Initial setup may be committed to `main` once:

```bash
git init
git add .gitignore README.md package.json
git commit -m "chore: initialize prompt engineering lab"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

After this, use a branch and PR for every mission.

---

## Mission 1

### Issue title
`Compare weak and professional password checker prompts`

### Issue body
```md
## Goal
Generate a JavaScript password-strength checker using a bad prompt, a better prompt, and a professional prompt, then compare output quality.

## Acceptance Criteria
- [ ] Document all three prompts and expected/observed outputs.
- [ ] Explain what the bad prompt missed.
- [ ] Add `src/passwordStrength.js`.
- [ ] Handle invalid input and required edge cases.
- [ ] Add manual test evidence.
- [ ] Record AI mistake and manual correction.

## Required Files
- `prompts/01-bad-vs-good-prompts.md`
- `src/passwordStrength.js`
- `tests/manual-test-cases.md`
```

### Branch and commits
```bash
git checkout main
git pull
git checkout -b feature/password-strength-checker
# add prompt comparison
git add prompts/01-bad-vs-good-prompts.md
git commit -m "docs: compare password checker prompt quality"
# add code and tests
git add src/passwordStrength.js tests/manual-test-cases.md
git commit -m "feat: add reusable password strength checker"
git push -u origin feature/password-strength-checker
```

### PR title
`feat: add password strength prompt comparison and checker`

Use `Closes #1` in the PR body.

---

## Mission 2

### Issue title
`Generate reusable registration form validator`

### Acceptance criteria
```md
- [ ] Validate name, email, phone, password, and confirmation.
- [ ] Return structured error arrays.
- [ ] Do not manipulate the DOM.
- [ ] Document role, task, context, constraints, format, edge cases, and verification.
- [ ] Add manual tests.
```

### Commands
```bash
git checkout main && git pull
git checkout -b feature/form-validator
git add prompts/02-code-generation-prompts.md
git commit -m "docs: add constrained form validator prompt"
git add src/validator.js tests/manual-test-cases.md
git commit -m "feat: create reusable form validation function"
git push -u origin feature/form-validator
```

PR title: `feat: add constraint-based registration validator` — `Closes #2`

---

## Mission 3

Issue: `Debug incorrect discount calculation`

```md
## Reproduction
Input: price 100, discount 20
Expected: 80
Actual broken result: 99.8

## Acceptance Criteria
- [ ] Document broken code, expected vs actual, and debugging prompt.
- [ ] Apply minimal formula correction.
- [ ] Validate finite numbers and boundaries.
- [ ] Prove the fix with manual tests.
```

```bash
git checkout main && git pull
git checkout -b fix/discount-calculation
git add prompts/03-debugging-prompts.md
git commit -m "docs: add context-rich discount debugging prompt"
git add src/discountCalculator.js tests/manual-test-cases.md
git commit -m "fix: correct discount calculation and boundaries"
git push -u origin fix/discount-calculation
```

PR: `fix: correct and verify discount calculation` — `Closes #3`

---

## Mission 4

Issue: `Refactor text analyzer without adding features`

```bash
git checkout main && git pull
git checkout -b refactor/text-analyzer-cleanup
git add prompts/04-refactoring-prompts.md
git commit -m "docs: document behavior-preserving refactor prompt"
git add src/textAnalyzer.js tests/manual-test-cases.md
git commit -m "refactor: improve text analyzer structure"
git push -u origin refactor/text-analyzer-cleanup
```

PR: `refactor: clean up text analyzer without feature changes` — `Closes #4`

---

## Mission 5

Issue: `Review and harden JavaScript utility functions`

Acceptance criteria:
```md
- [ ] Use strict senior-engineer review prompt.
- [ ] Record prioritized findings.
- [ ] Apply at least three useful suggestions manually.
- [ ] Reject at least one unsuitable suggestion with reasoning.
- [ ] Add or update tests.
```

```bash
git checkout main && git pull
git checkout -b review/apply-ai-review-fixes
git add prompts/05-code-review-prompts.md
git commit -m "docs: add strict AI code review prompt"
# apply three actual findings, then:
git add src tests
git commit -m "fix: apply prioritized AI review findings"
git push -u origin review/apply-ai-review-fixes
```

PR: `fix: apply selected AI code review findings` — `Closes #5`

**Required human review:** Ask another intern or mentor to review this PR. Do not merge immediately. After feedback, make a real update:

```bash
# make the requested change
git add .
git commit -m "fix: address reviewer validation feedback"
git push
```

Reply to the review explaining what changed, then merge. This supplies both external review and post-review update evidence.

---

## Mission 6

Issue: `Document responsible AI usage policy and report`

```bash
git checkout main && git pull
git checkout -b docs/responsible-ai-policy
git add prompts/06-responsible-ai-prompts.md responsible-ai-policy.md
git commit -m "docs: add responsible AI usage policy"
git add ai-usage-report.md README.md WORKFLOW-GUIDE.md .github/pull_request_template.md
git commit -m "docs: complete AI usage report and submission guidance"
git push -u origin docs/responsible-ai-policy
```

PR: `docs: add responsible AI policy and final report` — `Closes #6`

---

## Minimum Commit Count
The plan above contains 13 meaningful commits including initialization, satisfying the minimum of 10. Commit only files genuinely changed in that step.

## Correct Merge/Issue Order
1. Create issue.
2. Create branch from updated `main`.
3. Commit and push.
4. Open PR with `Closes #N`.
5. Test and review.
6. Merge PR.
7. Confirm GitHub closes the issue automatically after merge.

Do not manually close the issue before merge.

## Screenshots to Capture
Use clear filenames:
- `screenshots/01-issues-list.png`
- `screenshots/02-branches.png`
- `screenshots/03-test-output.png`
- `screenshots/04-pr-with-closes-keyword.png`
- `screenshots/05-review-feedback.png`
- `screenshots/06-post-review-commit.png`
- `screenshots/07-merged-pr.png`
- `screenshots/08-closed-issues.png`
- `screenshots/09-token-usage.png`

## Final Submission Note Template
```text
Repository: [GitHub URL]
Completed missions: 6/6
Issues: 6
Pull requests: 6
Reviewer: [real reviewer name]
Total tokens used: [real total; exact/estimated]
Main AI lesson: Precise prompts improve first-pass quality, but manual verification, selective correction, and traceable review remain necessary.
```

## Viva Answer Guide

**Worst vs best prompt:** The worst prompt only named the task. The best prompt supplied role, context, constraints, output shape, edge cases, and verification.

**Wrong AI output:** Demonstrate one real mistake from your session, the failing input, expected/actual result, and your correction.

**AI-assisted vs AI-dependent:** AI-assisted work remains human-controlled, tested, understood, and selectively accepted. AI-dependent work is copied without verification or understanding.

**Never share:** Passwords, API keys, tokens, `.env` files, company/client data, personal information, private logs, and confidential source code outside approved tools.

**Manual testing:** Explain that each test records input, expected output, observed output, and pass/fail status, including normal, boundary, invalid, and empty inputs.

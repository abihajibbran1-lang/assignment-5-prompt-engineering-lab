# Responsible AI Usage Policy for Developers

## 1. Purpose
AI coding assistants may support engineering work, but the developer remains responsible for correctness, security, privacy, licensing, testing, and final approval.

## 2. Permitted Uses
Developers may use approved AI tools to:
- brainstorm implementation approaches;
- explain unfamiliar code;
- generate small drafts or examples;
- debug using sanitized reproductions;
- suggest refactors;
- review code and documentation;
- propose test cases.

## 3. Information That Must Never Be Pasted
Do not submit any of the following to an AI tool unless the company has explicitly approved that tool and data flow:
- passwords, API keys, access tokens, session cookies, private keys, certificates, recovery codes, or credentials;
- `.env` files or configuration containing secrets;
- private company source code outside the approved scope;
- client data, customer records, contracts, financial data, medical data, or personally identifiable information;
- confidential roadmaps, internal incidents, security vulnerabilities, or unreleased product details;
- production database contents or logs containing sensitive values.

Use sanitized examples, fabricated data, reduced reproductions, and placeholders such as `API_KEY_REDACTED`.

## 4. Prohibited Practices
- Blindly copying generated code into production or an assessment.
- Claiming AI-generated work as entirely human-written when disclosure is required.
- Fabricating prompts, token counts, test evidence, reviews, issues, or pull requests.
- Asking AI to bypass security controls, licenses, review requirements, or company policy.
- Committing secrets or `.env` files to Git.

## 5. Verification Requirements
Before merging AI-assisted work, the developer must:
1. Read and understand every changed line.
2. Confirm requirements and assumptions.
3. Run relevant tests and manually check edge cases.
4. Review validation, error handling, security, privacy, and dependency risks.
5. Check generated code for copied or suspicious licensed material.
6. Remove unused, misleading, or over-engineered output.
7. Ensure the final code can be explained during review or viva.

## 6. Honest Disclosure and Records
Record:
- the AI tool used;
- the meaningful prompt or prompt summary;
- what the AI did correctly;
- what it did incorrectly or incompletely;
- manual corrections;
- test evidence;
- exact or clearly labelled estimated token usage.

## 7. Pre-Prompt Checklist
- [ ] Have I removed secrets and private data?
- [ ] Can I use a minimal sanitized example?
- [ ] Is this tool approved for the data involved?
- [ ] Is the task and output format specific?
- [ ] Have I included constraints and edge cases?

## 8. Pre-Merge Checklist
- [ ] I understand every changed line.
- [ ] Automated and manual tests pass.
- [ ] No secret or `.env` file is committed.
- [ ] Validation and failure paths were tested.
- [ ] AI mistakes and manual fixes are documented.
- [ ] AI usage and token counts are honestly recorded.
- [ ] A human reviewer can reproduce the evidence.

## 9. Incident Response
If sensitive information is entered into an AI tool or committed to Git:
1. Stop further sharing.
2. Notify the mentor or security contact immediately.
3. Revoke and rotate exposed credentials.
4. Remove the secret from the repository and, when required, its history.
5. Document the incident accurately and follow company response procedures.

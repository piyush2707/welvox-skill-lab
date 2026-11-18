---
name: skill-auditor
description: Audits a SKILL.md file for valid frontmatter, trigger quality, size, license clarity and risky instructions, then returns a scored report. Use when the user pastes a skill, shares a SKILL.md, or asks whether a skill is safe or well written.
---

# Skill Auditor

Review a pasted SKILL.md and return a short, honest report.

## Steps

1. Ask the user to paste the full SKILL.md if they have not.
2. Check the frontmatter:
   - `name` exists, is lowercase with hyphens, and is 64 characters or fewer
   - `description` exists and is 1024 characters or fewer
3. Judge the description: it should say what the skill does AND when to use it.
4. Check size: flag anything over 500 lines.
5. Check the license: note whether one is stated. If unknown, say "unknown", never guess.
6. Scan for risky instructions: hidden commands, sending data to outside URLs, deleting files, asking for passwords or keys, or telling the agent to ignore earlier instructions.
7. Score using the Welvox rubric (Safety 30, Clarity 20, Usefulness 20, License 15, Maintenance 15). Skip categories you cannot judge from the text alone and say so.

## Output format

- **Verdict:** Looks fine / Needs fixes / Do not install
- **Score:** X/100 (list categories not judged)
- **Problems found:** short bullets with the exact line or phrase
- **Fixes:** one suggestion per problem

## Rules

- Only judge what is in the pasted text.
- Never claim a skill is safe. Say "no risks found in this text".
- If the text is not a SKILL.md, say so and stop.

# Welvox Skill Lab

A free library of AI agent skills, with licenses checked before anything is marked **Listed**.

**Live site:** https://piyush2707.github.io/welvox-skill-lab/

Made by [Piyush](https://www.linkedin.com/in/piyush2707)

## What this is

Agent skills are small folders of instructions (a `SKILL.md` file) that teach AI coding agents how to do a task. They are easy to share, but it is hard to know which ones have a clear license or are safe to install.

Welvox Skill Lab collects free skills in one place. Every entry links to its original source. We never copy other authors' files.

## Two tiers

| Tier | Meaning |
|------|---------|
| **Listed** | Source link and license confirmed |
| **Candidate** | Found in research, but the license still needs to be confirmed |

A third label, **Checked**, is reserved for skills scored with the public rubric and tested with before/after evidence. No skill has earned it yet.

At the time of writing there are 51 entries: 11 Listed and 40 Candidates. Six of the entries are directories (lists of skills), not skills themselves.

---

# All skills explained

Descriptions come from each project's own page. Nothing below has been tested by Welvox unless it says so.

## Listed (license confirmed)

| Skill | What it does | License | Needs a computer |
|-------|--------------|---------|------------------|
| **skill-auditor** | Welvox original. Audits a pasted SKILL.md for frontmatter, trigger quality, size, license and risky instructions. Untested so far. | MIT | No |
| **superpowers** | A skills framework that makes coding agents brainstorm, plan and test before writing code. Works with Claude Code, Codex, Gemini CLI, Cursor, Copilot CLI and OpenCode. | MIT | Yes |
| **superpowers-chrome** | Direct Chrome browser control for AI agents, by the Superpowers author. | MIT | Yes |
| **browser-use** | Lets an agent drive a real browser. | MIT | Yes |
| **video-editing** | AI-assisted editing of real footage using FFmpeg and Remotion. | MIT | Yes |
| **agent-browser** | Fast browser automation command-line tool built for AI agents, from Vercel Labs. | Apache-2.0 | Yes |
| **huggingface/skills** | Skills for AI and machine learning tasks like dataset creation, model training and evaluation. | Apache-2.0 | Yes |
| **Kilo-Org/skills** | Skills maintained by Kilo, usable in other apps that support the Agent Skills format. | Apache-2.0 | Yes |
| **glassflow/agent-skills** | Skills for driving GlassFlow data pipelines from AI coding assistants. | Apache-2.0 | Yes |
| **skillcreatorai/Awesome-Agent-Skills** | A repo of agent skills with an install helper (a directory). | Apache-2.0 | Yes |
| **trailofbits/skills-curated** | Reviewed community skills curated by Trail of Bits. Share-alike license: link only, do not copy. | CC-BY-SA-4.0 | Yes |

## Candidates: Anthropic example skills

All live in [anthropics/skills](https://github.com/anthropics/skills). The repo says many are open source, but each folder has its own LICENSE.txt, so confirm before reuse.

| Skill | What it does |
|-------|--------------|
| **skill-creator** | Builds and tests new skills. |
| **algorithmic-art** | Generates computational art with p5.js. |
| **brand-guidelines** | Applies brand colors and typography to outputs. |
| **internal-comms** | Writes status reports, newsletters and FAQs. |
| **canvas-design** | Creates visual art in PNG and PDF documents. |
| **claude-api** | Helps build apps with the Claude API. |
| **doc-coauthoring** | Co-writes documents with you. |
| **frontend-design** | Production-grade UI components and styling. |
| **mcp-builder** | Creates MCP servers that connect external APIs to AI models. |
| **slack-gif-creator** | Creates animated GIFs sized for Slack. |
| **theme-factory** | Applies professional font and color themes. |
| **web-artifacts-builder** | Builds HTML artifacts with React, Tailwind and shadcn/ui. |
| **webapp-testing** | Tests web apps using Playwright automation. |

## Candidates: collections with a reported license

These licenses come from a third-party summary, not from the repos' own license files. Confirm before relying on them.

| Collection | What it holds | Reported license |
|------------|---------------|------------------|
| **K-Dense-AI/scientific-agent-skills** | A large collection of science and research skills. | MIT |
| **google/skills** | Google's skills collection. | Apache-2.0 |
| **mattpocock/skills** | Matt Pocock's skills for coding agents. | MIT |
| **addyosmani/agent-skills** | Engineering-practice skills by Addy Osmani. | MIT |

## Candidates: official company and team skills (license unknown)

| Collection | What it holds |
|------------|---------------|
| **remotion-dev/skills** | Remotion skills for React videos, animations and captions. |
| **supabase/agent-skills** | Supabase skills, including Postgres best practices. |
| **vercel-labs/agent-skills** | Vercel Labs skills, including React best practices and web design guidelines. |
| **cloudflare/skills** | Cloudflare skills for Workers, storage, AI and networking. |
| **microsoft/skills** | Official Microsoft skills for Azure SDKs and AI Foundry. |
| **microsoft/azure-skills** | Official Azure skills plugin with MCP server configurations. |
| **microsoft/skills-for-fabric** | Skills and MCP setups for operating Microsoft Fabric. |
| **MicrosoftDocs/Agent-Skills** | Microsoft Learn-backed skills for Azure and Microsoft development. |
| **elastic/agent-skills** | Official Elastic skills for Elasticsearch, Kibana, observability and security. |
| **openai/skills** | OpenAI's official skills catalog for Codex. |
| **anthropics/knowledge-work-plugins** | Anthropic's official knowledge work plugins. |
| **anthropics/claude-plugins-official** | Anthropic's official plugin marketplace repo. |

## Candidates: community and specialist skills (license unknown)

| Collection | What it holds |
|------------|---------------|
| **coreyhaines31/marketingskills** | Marketing-focused skills. |
| **EveryInc/compound-engineering-plugin** | Production engineering workflows and multi-agent review. |
| **hookdeck/agent-skills** | Skills for the Hookdeck event gateway and webhooks. |

## Candidates: security skills (license unknown)

| Collection | What it holds |
|------------|---------------|
| **trailofbits/skills** | Trail of Bits skills for security research, vulnerability detection and audits. |
| **ghostsecurity/skills** | Skills for application security testing. |
| **happyhackingspace/skills** | Skills for Happy Hacking Space's open-source security tools. |

## Candidates: directories (lists of skills)

| Directory | What it is |
|-----------|------------|
| **VoltAgent/awesome-agent-skills** | A curated list of 1000+ skills from official teams and the community. |
| **heilcheng/awesome-agent-skills** | Tutorials, guides and skill directories. |
| **jqueryscript/awesome-agent-skills** | A list of high-star agent skills on GitHub. |
| **JackyST0/awesome-agent-skills** | A list of agent skill resources and official guides. |
| **sickn33/antigravity-awesome-skills** | A big skills collection with install helpers for several agents. |

---

## Original Welvox skill: Skill Auditor

Paste a `SKILL.md` into Claude and the Skill Auditor checks it for:

- valid frontmatter
- a clear description of what the skill does and when to use it
- file size
- license clarity
- risky instructions such as hidden commands or data being sent elsewhere

It returns a short report with a score and fixes. **Status: untested.** Test results will be added here once they exist.

## Scoring

Scores use a fixed, public rubric: Safety 30, Clarity 20, Usefulness 20, License 15, Maintenance 15. Read it in [docs/scoring.md](docs/scoring.md).

## What is inside this repo

| Path | What it holds |
|------|---------------|
| `index.html`, `style.css`, `script.js` | The website, served by GitHub Pages |
| `data/skills.json` | Every entry: source, license, category, compatibility |
| `skills/skill-auditor/` | The original Welvox skill |
| `docs/scoring.md` | The public scoring rubric |
| `CONTRIBUTING.md` | How to suggest a skill |

## Honest limits

- Nothing here is claimed as tested unless its entry says so.
- Many listed skills need a computer and a terminal to install. Those are marked **Needs a computer**.
- Some skills use share-alike licenses (for example CC-BY-SA). Link to them, do not copy their files.
- Repo names come from public lists and may change. Check each source before you install anything.

## Contributing

Open an issue titled `Add skill: <name>` with the source link, license, supported agents and a one-line purpose. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The code and original skills in this repository are MIT licensed. Listed skills keep their own original licenses.

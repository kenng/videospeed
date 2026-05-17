# Domain Docs

This repo uses a **single-context** layout for domain documentation.

## Layout

- **CONTEXT.md** — Domain language and key concepts for the videospeed browser extension. Updated as the project evolves.
- **docs/adr/** — Architecture Decision Records. When major decisions are made (e.g., switching shadow DOM strategies, adding frame-by-frame controls), record them here.

## How skills use these files

Skills like `improve-codebase-architecture`, `diagnose`, and `tdd` read `CONTEXT.md` to:

- Learn the domain language (e.g., what "frame-by-frame navigation" means in this project)
- Understand key constraints (e.g., browser extension limitations, shadow DOM challenges)
- Avoid suggesting solutions that violate established decisions

They also read `docs/adr/` to understand past architectural choices and why they were made.

## Creating CONTEXT.md

If `CONTEXT.md` doesn't exist yet, create it with:

- A 2–3 sentence overview of what the project does
- Key domain concepts (e.g., "video playback speed control", "frame-by-frame navigation", "shadow DOM injection")
- Key constraints (e.g., "must work in browser extension sandbox", "must not block video playback")
- Links to relevant code (e.g., "playback speed logic lives in `inject.js`")

## Creating an ADR

When you make a significant architectural decision:

1. Create a file like `docs/adr/0001-shadow-dom-discovery.md`
2. Use the format:
   ```markdown
   # ADR 0001: Shadow DOM Discovery Strategy
   
   ## Status
   Accepted
   
   ## Context
   [Why this decision was needed]
   
   ## Decision
   [What we decided to do]
   
   ## Consequences
   [What changed as a result]
   ```

This helps future agents (and humans) understand the reasoning, not just the current state.

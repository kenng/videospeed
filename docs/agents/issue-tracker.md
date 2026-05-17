# Issue Tracker

Issues for this repo are tracked in **GitHub Issues** at https://github.com/kenng/videospeed/issues.

## How skills use this

Agent skills (`triage`, `improve-codebase-architecture`, `to-issues`, etc.) use the `gh` CLI to:

- Read issues and their labels
- Create issues when filing bugs or feature requests
- Add labels to move issues through triage states

## Workflow

When you invoke a skill that needs to reference an issue, it will use `gh issue` commands. Make sure you have the GitHub CLI installed and authenticated:

```bash
gh auth login
```

## Issue states

Issues flow through these states via labels:

- `needs-triage` — maintainer needs to evaluate the issue
- `needs-info` — waiting on more information from the reporter
- `ready-for-agent` — fully specified, ready for an agent to implement
- `ready-for-human` — needs human implementation
- `wontfix` — will not be actioned

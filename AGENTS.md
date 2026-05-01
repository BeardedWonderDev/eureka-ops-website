# AGENTS

This file defines my **global** rules for AI coding assistants (Codex CLI/Web and similar tools).
Language- and stack-specific rules live in separate **rules files** referenced in the **Rules Registry** below.

Local/project AGENTS files should extend or refine these rules for a specific repository or service, not silently contradict them.

## Core Development Philosophy

### KISS (Keep It Simple, Stupid)

Simplicity is a feature. Prefer straightforward solutions over clever ones.
Simple code is easier to understand, change, debug, and hand off to other humans.

### YAGNI (You Aren't Gonna Need It)

Do not build abstraction layers, features, or “future hooks” on speculation.
Implement what is needed for current requirements; add complexity only when it’s justified by real use.

### Design Principles

* **Dependency Inversion** – High-level policies should not depend on low-level plumbing directly; depend on abstractions where it helps.
* **Open/Closed** – Prefer extending behavior with new code over modifying stable code in-place.
* **Vertical Slices** – Organize by feature/domain where possible, not only by technical layer.
* **Single Responsibility** – Modules/components/functions should each do one thing well.
* **Fail Fast** – Validate inputs and invariants early, then fail loudly and clearly when something is off.

These principles apply regardless of language (Go, Python, JS/TS, etc.).

## 🤖 AI Assistant Behavior

### Context Awareness

* Before implementing, **scan the repository** and reuse existing patterns.
* Prefer **composition over inheritance** or global state.
* Use existing utilities, helpers, and modules before inventing new ones.
* Look for similar functionality in other domains/features and stay consistent with those patterns.

### Pitfalls to Avoid

* Reimplementing logic that already exists somewhere else in the codebase.
* Deleting or weakening tests without a clear, documented reason.
* Making large structural changes without first summarizing the intended plan.
* Adding new dependencies when an equivalent already exists in the project.

### Workflow Expectations

* Treat tests as part of the implementation, not an afterthought.
* For larger or architectural changes, first write out the plan in plain language, then implement.
* Break complex tasks into smaller, independently testable pieces.
* When a request is ambiguous, restate your understanding before writing code.

## Commit & Pull Request Creation Rules

This section defines **mandatory rules** for how AI assistants must create commits and pull requests.
Commits and PRs are part of the project’s long-term contract and must be treated with the same care as code.

### Commit Scope & Granularity

* Commits must be **small, focused, and logically complete**.
* Each commit should represent **one meaningful change**:

  * One feature
  * One fix
  * One refactor
* Do **not** bundle unrelated changes into a single commit.
* Avoid “drive-by” changes (formatting, renames, refactors) unless they are directly required for the task.

If a change cannot be clearly described in one sentence, it likely needs to be split into multiple commits.

### Commit Message Format

All commits must follow **Conventional Commits**:

```
<type>(<scope>): <short summary>
```

Where:

* **type** is one of:

  * `feat` – new behavior or API surface
  * `fix` – bug fix or correctness issue
  * `refactor` – internal change with no behavior change
  * `test` – adding or modifying tests only
  * `docs` – documentation-only changes
  * `chore` – tooling, config, or non-code maintenance
  * `breaking` – explicit breaking change (use sparingly and intentionally)

* **scope**:

  * Should be concise and domain-oriented (`client`, `auth`, `api`, `parser`, etc.).
  * Omit only if the change truly spans multiple unrelated areas.

* **summary**:

  * Imperative mood (“add”, “fix”, “remove”, not “added” or “adds”).
  * Clear and specific.
  * No filler words (“misc”, “updates”, “changes”).

Examples:

```text
feat(client): add cursor-based pagination support
fix(auth): prevent token refresh race condition
refactor(api): extract request signing logic
breaking(client): rename ListUsers to ListAccounts
```

### Commit Content Rules

* A commit must:

  * Build successfully.
  * Pass all relevant tests.
  * Not leave the repository in a broken or partially migrated state.
* Do not commit:

  * Commented-out code
  * Debug logging
  * Temporary hacks
  * Incomplete TODOs without explicit agreement

If intermediate commits are required during exploration, they must be squashed or cleaned up before PR creation.

### Pull Request Creation Rules

Every PR must be **reviewable, self-contained, and explicit**.

#### PR Title

* PR titles must follow the same **Conventional Commit** format as commits.
* The title should describe the **net effect** of the PR, not the implementation steps.

Example:

```text
feat(client): support cursor-based pagination
```

#### PR Description Expectations

Each PR description must include:

1. **Summary**

   * A short explanation of what changed and why.
   * Written for future maintainers, not just the current reviewer.

2. **Scope of Change**

   * What areas of the codebase are affected.
   * What is explicitly *not* included.

3. **Behavioral Impact**

   * New behavior
   * Changed behavior
   * Breaking changes (if any, must be called out explicitly)

4. **Testing**

   * What tests were added or updated.
   * How the change was validated.

Avoid vague language such as “various fixes” or “minor improvements.”

### Breaking Changes

* Breaking changes must be:

  * Explicitly labeled using `breaking` in commits and PR titles.
  * Clearly explained in the PR description.
* Do not hide breaking changes inside refactors or “cleanup” commits.
* If a breaking change is unavoidable, explain:

  * Why it is necessary
  * What downstream users must change

### Release-Readiness Rule

Commits and PRs should be written as if they will be read verbatim in release notes.

Assume:

* They will be consumed by humans.
* They will be used to determine semantic versioning.
* They will be relied on by downstream consumers to assess risk.

If a commit or PR would be confusing in a changelog, it is not ready.

## Tooling & Search Conventions

Use fast, modern tools where they are available.

**Search:**

* Prefer `rg` (ripgrep) over `grep`/`find` for searching within a repo when available.

Example:

```bash
# ❌ Avoid
grep -r "pattern" .
find . -name "*.ext"

# ✅ Prefer
rg "pattern"
rg --files -g "*.ext"
```

The exact commands may vary by environment, but the principle stands:
**use fast, code-aware tools when possible.**

## Code Structure & Modularity

Across all languages and projects:

* Keep files and modules **small and focused**.
* Avoid “god files” or “god objects” that accumulate too many responsibilities.
* Group code **by feature or bounded context** where that makes sense.
* Prefer a few small, composable functions over one giant function.
* Extract cross-cutting concerns (logging, error handling, validation) into reusable helpers where appropriate.

Practical guidance:

* If a file is getting hard to navigate, it is a candidate to be split.
* If a function is hard to explain in one sentence, it is probably doing too much.

## Working With External Data

Global rule: **never trust external data**.

“External data” includes (but is not limited to):

* User input (forms, CLI flags, uploads, request bodies).
* Data from other processes/services (HTTP, gRPC, message queues, etc.).
* Database results if the schema or source cannot be fully trusted.
* Environment variables.
* Files read from disk that can be modified outside the codebase.

Expectations:

* Validate and normalize data at boundaries (HTTP handlers, CLI entrypoints, message consumers, etc.).
* Fail clearly when data is invalid instead of letting subtle bugs propagate.
* Use schema/validation libraries where available in the language; otherwise implement explicit checks.

## Testing Expectations

* Aim for **high coverage on core/business logic**, not just random files.
* Every non-trivial change should be accompanied by tests.
* Co-locate tests near the code they cover (same folder, `tests` or `__tests__` directory, etc.).
* Test **behavior**, not internal implementation details:

  * Verify outputs, side effects, and observable behavior.
  * Avoid brittle tests that depend on private internals or incidental logging.

Tooling (e.g. `go test`, `pytest`, `vitest`, `jest`, etc.) is defined per-project in its own rules file.

## Documentation & Code Quality

* All **public-facing APIs** (exported functions, public methods, HTTP handlers, modules, commands) should have concise documentation:

  * What it does.
  * Important constraints or assumptions.
  * Any side effects.
* Prefer documenting **why** a decision was made over restating obvious code.
* In production paths:

  * Avoid leaving raw debug logging in place.
  * Use structured logging or the project’s logging utility if available.
* Linting and formatting:

  * Follow the project’s formatter and linter rules.
  * Lint and format should be clean before merging changes.

## Global Critical Rules

These rules apply in all projects unless a stack-specific rules file explicitly tightens them:

1. **Be explicit about behavior and contracts**

   * Make function/module behavior clear via naming, docs, and types (where applicable).
   * Don’t rely on “magical” side effects that aren’t obvious from the API.

2. **Validate at boundaries**

   * Validate inputs from the outside world as early as possible.
   * Don’t assume external components or services behave perfectly.

3. **Test new behavior**

   * New or changed behavior should be covered by tests.
   * Bug fixes should ideally add regression tests that would have caught the bug.

4. **Keep changes small when possible**

   * Smaller, focused changes are easier to reason about and review.
   * Large refactors should be broken into logical steps when feasible.

5. **Automation passes must be green before merge**

   * Tests, linting, and format checks must pass before code is considered “ready.”

6. **Security basics**

   * Don’t log secrets or sensitive data.
   * Don’t store sensitive information in insecure places (browser local storage, world-readable files, etc.).
   * Treat untrusted input as hostile until validated/sanitized.

## Global Pre-Commit Checklist (Baseline)

Before committing in any serious project, the assistant should assume the following need to be true (or make it true):

* [ ] Language/toolchain-specific checks (type checks, build, etc.) pass.
* [ ] Tests for new or changed behavior exist.
* [ ] Test suite passes.
* [ ] Linting passes.
* [ ] Formatting has been applied.
* [ ] No leftover debug instrumentation (ad-hoc logs, print statements, etc.).
* [ ] Public APIs and significant changes are documented.

Individual projects may add additional items in their own rules files.

## Forbidden Practices (Global)

Unless explicitly justified *and* documented:

* Introducing duplicate logic instead of reusing existing modules/utilities.
* Removing or weakening tests to “make them pass” without understanding the failure.
* Committing code that does not build or that fails the test suite.
* Quietly swallowing errors instead of handling or propagating them.
* Trusting external data (including environment variables) without validation.
* Storing secrets or sensitive data in inappropriate places (logs, plaintext files, etc.).

## Rules Registry

These are **stack-specific rules files**. When working in code that matches a given stack,
**you must review and follow the rules in the corresponding file in addition to this global file.**

* **Next.js 15 + React 19 Rules**
  For App Router projects built on Next.js 15 with React 19 and TypeScript, including strict typing, Zod-style validation, and TanStack Query patterns.
  When working on such a project, read and apply: `~/.openclaw/rules/NextJS15_React19.md`

* **Go General Rules**
  For general Go application development, including module/toolchain hygiene, package/API design, error handling, context usage, concurrency safety, testing, and static analysis expectations.
  When working on Go code, read and apply: `~/.openclaw/rules/Go_General.md`

* **Go HTTP Server Rules**
  For Go services exposing HTTP APIs (typically `net/http`), including routing boundaries, middleware constraints, request/response conventions, timeouts/limits, and graceful shutdown.
  When working on a Go HTTP server, read and apply: `~/.openclaw/rules/Go_General.md` and `~/.openclaw/rules/Go_HTTP_Server.md`

* **Go gRPC Server Rules**
  For Go services exposing gRPC APIs (grpc-go), including protobuf hygiene and compatibility, interceptor standards, status code mapping, streaming semantics, and operational hardening.
  When working on a Go gRPC server, read and apply: `~/.openclaw/rules/Go_General.md` and `~/.openclaw/rules/Go_gRPC_Server.md`

* **Go WebSocket Server Rules**
  For Go services exposing WebSocket endpoints, including upgrade constraints, connection lifecycle, single-reader/single-writer patterns, backpressure, heartbeats/timeouts, origin/auth policy, and multi-instance fanout considerations.
  When working on a Go WebSocket server, read and apply: `~/.openclaw/rules/Go_General.md` and `~/.openclaw/rules/Go_WebSocket_Server.md`

* **Go TUI Rules**
  For Go terminal UI applications, including terminal lifecycle safety, rendering purity, keymap discipline, async responsiveness, non-TTY behavior, and logging/debug constraints.
  When working on a Go TUI, read and apply: `~/.openclaw/rules/Go_General.md` and `~/.openclaw/rules/Go_TUI.md`

* **Swift + SwiftUI Skip Fuse Rules**
  For cross-platform mobile apps built with Swift 6+ and SwiftUI targeting iOS and Android via Skip Fuse, including module mode/bridging configuration, Compose interop boundaries, asset/localization handling, and Android visibility constraints (avoid private, prefer internal). When working on a Skip Fuse project, read and apply: `~/.openclaw/rules/Swift_SwiftUI_SkipFuse.md`
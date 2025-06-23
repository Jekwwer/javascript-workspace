# Javascript Workspace

![github-release](https://img.shields.io/github/v/release/Jekwwer/javascript-workspace?logo=github&link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fjavascript-workspace%2Freleases%2Flatest)
![github-release-date](https://img.shields.io/github/release-date/Jekwwer/javascript-workspace?link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fjavascript-workspace%2Freleases%2Flatest)
![github-commits-since-latest-release](https://img.shields.io/github/commits-since/Jekwwer/javascript-workspace/latest?link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fjavascript-workspace%2Freleases%2Flatest)
![libraries.io-dependency-status-for-github-repo](https://img.shields.io/librariesio/github/Jekwwer/javascript-workspace?logo=librariesdotio&logoColor=%23FFFFFF)
![github-open-issues](https://img.shields.io/github/issues/Jekwwer/javascript-workspace?logo=github&link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fjavascript-workspace%2Fissues)
![is-maintained](https://img.shields.io/maintenance/yes/2025)
![license](https://img.shields.io/github/license/Jekwwer/javascript-workspace?link=https%3A%2F%2Fgithub.com%2FJekwwer%2Fjavascript-workspace%2Fblob%2Fmain%2FLICENSE)

## Project Overview 🚀

This repository is a robust template for JavaScript development using **npm**. It comes equipped with tools for
formatting, spell-checking, a ready-to-use devcontainer, custom VS Code settings, essential repo files, automated
checks, integrated VS Code extensions, semantic releases, and extensive in-repo guides for project management and
customization.

## Features ✨

- **Devcontainer & VS Code:** Ubuntu‑based Docker container with Node.js 20 and Python (for pre‑commit). Includes
  recommended VS Code extensions, workspace settings, and a seamless Codespaces experience.
- **Dependency Management:** npm for declarative `package.json` configuration and `package-lock.json` locking.
- **Formatting:** Prettier for JavaScript, JSON, Markdown, and YAML; enforced via pre-commit hooks and editor
  integrations.
- **Pre-commit Hooks:** Runs Prettier, yamllint, markdownlint, markdown-link-check, and other checks before commit.
- **Release Automation:** semantic-release on pushes to `main` to analyze commits, bump versions, generate changelogs,
  and publish GitHub releases automatically.
- **In-Repo Guides:** `CONTRIBUTING.md`, `STYLEGUIDE.md`, `SECURITY.md` to enforce best practices and streamline
  onboarding.

## Installation 📦

Designed for **GitHub Codespaces**—running locally is untested and may require extra configuration.

[![open-in-github-codespaces](https://github.com/codespaces/badge.svg)][open-in-codespaces]

## Usage 🛠️

Most manual quality checks and workflows are exposed via `package.json` scripts. These commands mirror the editor
integrations, pre-commit hooks, and CI pipelines.

### Formatting & Spell Checking

```bash
npm run format              # check formatting
npm run format-fix          # apply formatting fixes
npm run spell               # run cspell
```

## Contributing 👥

Contributions are welcome! Please read the [Contributing Guidelines][CONTRIBUTING] and check the [Issues][issues] page.

## License 🛡️

This project is licensed under the [MIT License][LICENSE].

## Contact 📬

For questions, reach out via [evgenii.shiliaev@jekwwer.com][evgenii.shiliaev@jekwwer.com] or open an [issue][issues].

---

This document is based on a template by [Evgenii Shiliaev][evgenii-shiliaev-github], licensed under [CC BY
4.0][jekwwer-markdown-docs-kit-license]. All additional content is licensed under [LICENSE][LICENSE].

[CONTRIBUTING]: CONTRIBUTING.md
[LICENSE]: LICENSE
[evgenii-shiliaev-github]: https://github.com/Jekwwer
[evgenii.shiliaev@jekwwer.com]: mailto:evgenii.shiliaev@jekwwer.com
[issues]: https://github.com/Jekwwer/javascript-workspace/issues
[jekwwer-markdown-docs-kit-license]: https://github.com/Jekwwer/markdown-docs-kit/blob/main/LICENSE
[open-in-codespaces]: https://codespaces.new/Jekwwer/javascript-workspace

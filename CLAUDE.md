# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a monorepo for creating presentation slides using [Slidev](https://sli.dev/). Each presentation lives in its own package under `packages/`, organized by topic and date.

## Architecture

### Monorepo Structure

- **pnpm workspace**: Uses pnpm workspaces with a catalog system for centralized dependency management
- **Package organization**: Each presentation is an independent package in `packages/{name}/`
- **Build isolation**: Packages are built independently and output to their respective `dist/` directories

### Package Structure

Each presentation package contains:
- `slides.md`: Main presentation file with frontmatter configuration and slide content
- `package.json`: Package manifest with Slidev scripts (dev, build, export)
- `pages/`: (Optional) Additional slide pages
- `snippets/`: (Optional) Code snippets that can be imported into slides

### Development Script

The root `scripts/dev.ts` provides an interactive CLI to select which presentation to work on. It:
1. Scans `packages/` for valid projects (directories with `package.json`)
2. Prompts user to select a project
3. Runs `pnpm --filter {project} dev` to start Slidev dev server

## Commands

### Development

```bash
# Interactive: Select a presentation to develop
pnpm dev

# Direct: Run specific presentation
pnpm --filter {package-name} dev
```

### Building

```bash
# Build all presentations
pnpm build

# Build specific presentation
pnpm --filter {package-name} build

# Export presentation to PDF/PPTX
pnpm --filter {package-name} export
```

### Linting

```bash
# Lint all files
pnpm lint
```

## Configuration

### ESLint

Uses `@antfu/eslint-config` with Vue support. Key customizations:
- Allows console statements (set to warn, not error)
- Enforces one attribute per line in Vue templates
- HTML elements must not be self-closing, Vue components must be self-closing
- Unused variables/imports are warnings (not errors) when prefixed with `_`

### TypeScript

- **Target**: ESNext
- **Module**: ESNext with node resolution
- **noEmit**: true (no compilation, type-checking only)
- Includes all `.ts`, `.vue`, `.mts` files in `packages/`
- Excludes `dist/`, `*.md` files

### pnpm Workspace

- Catalog mode set to `prefer` for dependency version management
- Only builds dependencies for `esbuild` and `playwright-chromium`
- Shell emulator enabled

## Creating a New Presentation

1. Create new directory: `packages/{YYYY-MM-topic}/`
2. Add `package.json` with:
   - Name matching directory
   - Scripts: `dev`, `build`, `export` (all using `slidev` commands)
3. Create `slides.md` with frontmatter and content
4. Optionally add `pages/`, `snippets/`, or `components/` directories
5. Run `pnpm dev` and select the new presentation

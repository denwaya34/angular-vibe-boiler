# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Ref Docs

- Angular Detail: docs/angular.md
- DaisyUI: docs/daisyui.md

## 制約事項

- codex mcp を用いて、深く徹底的に思考してください。
- Angularに関する実装時は angular-cli mcp を用いて、angularのベストプラクティスと最新仕様に基づいて実装してください。

## Environment Setup

- **Node**: 22.16.0, **pnpm**: 9.15.9, **bun**: 1.1.32 (managed via `mise`)
- **Package Manager**: pnpm (preferred, lockfile present)
- **Install Dependencies**: `pnpm i` or `npm i`
- **Exact versions enforced** via `.npmrc`

## Essential Commands

### Development & Testing
```bash
# Start development server (http://localhost:4200/)
pnpm start    # or npm start

# Run dev server + Stagewise assistant together
pnpm run dev  # or npm run dev
# (Stagewise UI on port 3100, app on 4200)

# Run Stagewise assistant only
pnpm run sw   # or npm run sw

# Run unit tests with Karma/Jasmine
pnpm test     # or npm test

# Lint code (MUST run before committing)
pnpm lint     # or npm run lint

# Build for production
pnpm build    # or npm run build

# Build and watch for development
pnpm run watch  # or npm run watch
```

### Angular CLI Scaffolding
```bash
ng g c <name>     # Generate component
ng g s <name>     # Generate service
ng g d <name>     # Generate directive
ng g p <name>     # Generate pipe
ng g guard <name> # Generate guard
```

### Running Single Tests
To run specific tests, use `fdescribe()` or `fit()` in spec files to focus on them.

## Architecture & Key Patterns

This is an **Angular 20** application using modern patterns:

### Core Architecture
- **Standalone Components by Default** - No NgModules needed, components are standalone
- **Zoneless Change Detection** - Uses `provideZonelessChangeDetection()` with signals for performance
- **Signals for State** - Use `signal()`, `computed()`, and `effect()` for reactive state management
- **New Control Flow** - Use `@if`, `@for`, `@switch` instead of `*ngIf`, `*ngFor`, `*ngSwitch`

### Critical Angular Conventions (from .cursor/rules/cursor.mdc)
- **DO NOT** add `standalone: true` in decorators - it's the default in Angular 20
- Use `input()` and `output()` functions instead of `@Input`/`@Output` decorators
- Use `inject()` function instead of constructor injection
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in components
- Use `host` object in decorator instead of `@HostBinding`/`@HostListener`
- Use `NgOptimizedImage` for static images
- Prefer Reactive Forms over Template-driven forms
- Do NOT use `ngClass`/`ngStyle` - use `class`/`style` bindings directly

### Project Structure
```
src/
├── app/
│   ├── app.ts              # Root component (TypeScript)
│   ├── app.html            # Root component template
│   ├── app.css             # Root component styles
│   ├── app.config.ts       # Providers: router, zoneless CD, error handlers
│   └── app.routes.ts       # Route definitions (currently empty)
├── main.ts                 # Bootstrap with standalone API
├── styles.css              # Tailwind v4 + daisyUI imports
├── index.html              # Main HTML (lang="ja", theme="light")
├── reset.d.ts              # TypeScript reset for better type safety
public/                     # Static assets (configured in angular.json)
```

### Styling Stack
- **Tailwind CSS v4** with PostCSS (configured in `.postcssrc.json`)
- **daisyUI 5.1** for component library
- No tailwind.config.js needed with v4 - use `@import "tailwindcss"` in styles.css

### Component Selectors
- **Components**: Element selectors, kebab-case, prefix `app-` (e.g., `app-user-profile`)
- **Directives**: Attribute selectors, camelCase, prefix `app` (e.g., `appHighlight`)

## TypeScript Configuration
- **Strict mode** enabled with all strict checks
- **Target**: ES2022
- **Single quotes** enforced by EditorConfig
- Avoid `any` type - use `unknown` when uncertain

## Testing Requirements
- Framework: Karma + Jasmine
- Test files: `*.spec.ts` alongside implementation
- Run all tests before marking any task complete

## Code Quality Checks
Before completing any task, ALWAYS run:
1. `pnpm lint` - Fix all ESLint errors
2. `pnpm build` - Ensure TypeScript compiles
3. `pnpm test` - Verify tests pass

## Tooling & Linting

### ESLint Configuration
- **Flat config** with TypeScript ESLint + Angular ESLint recommended configs
- **Component selectors**: element/kebab-case with prefix "app"
- **Directive selectors**: attribute/camelCase with prefix "app"
- **HTML templates** linted via Angular processor

### Prettier Configuration
- **Print width**: 100 characters
- **Single quotes** for TypeScript
- **Angular HTML parser** for templates
- Configured in `package.json`

### EditorConfig
- **Single quotes** for `*.ts` files
- **2-space indentation** throughout

## Angular CLI + Vite Builder
- Uses `@angular/build:application` (Vite-powered) for fast builds
- Development server with HMR on `http://localhost:4200/`
- Build budgets configured in `angular.json`

## TypeScript Reset
- `src/reset.d.ts` imports `@total-typescript/ts-reset`
- Provides safer built-in type definitions
- Avoid `any` type - use `unknown` when uncertain

## MCP Servers Available
Claude Code has access to these MCP servers (configured in `.mcp.json`):
- **angular-cli**: Angular CLI operations and best practices
- **ESLint**: Lint and fix code issues
- **codex**: Deep project search and analysis
- **o3-search**: Advanced web search
- **github**: GitHub operations
- **vercel**: Deployment operations
- **serena**: Code navigation and editing
- **playwright**: Browser automation

**Prefer using MCP servers over direct shell commands when available.**

## Package Manager & Workspace
- **pnpm workspace** configured with `onlyBuiltDependencies` for heavy native dependencies
- Speeds up installation for Tailwind oxide and esbuild
- Always use `pnpm` commands to respect lockfile and workspace settings

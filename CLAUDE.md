# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Ref Docs

- Angular Detail: @docs/angular.md
- DaisyUI: docs/daisyui.md

## 制約事項

- codex mcp を用いて、深く徹底的に思考してください。
- Angularに関する実装時は angular-cli mcp を用いて、angularのベストプラクティスと最新仕様に基づいて実装してください。

## Essential Commands

### Development & Testing
```bash
# Start development server (http://localhost:4200/)
npm start

# Run unit tests with Karma/Jasmine
npm test

# Lint code (MUST run before committing)
npm run lint

# Build for production
npm run build

# Build and watch for development
npm run watch
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
│   ├── app.component.ts    # Root standalone component with signal state
│   ├── app.config.ts       # Providers: router, zoneless CD, error handlers
│   └── app.routes.ts       # Route definitions (lazy load features)
├── main.ts                 # Bootstrap with standalone API
└── styles.css              # Tailwind v4 + daisyUI imports
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
1. `npm run lint` - Fix all ESLint errors
2. `npm run build` - Ensure TypeScript compiles
3. `npm test` - Verify tests pass

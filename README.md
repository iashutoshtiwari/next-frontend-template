# Next.js 16 Template (Systems-Grade)

A strictly opinionated, production-ready frontend architecture built for durability, automation, and long-term scalability.
Optimized for **Next.js 16 (App Router)** and **Tailwind CSS v4** with a systems-first approach to structure, consistency, and maintainability.

---

## 🛠 Tech Stack

**Framework:** Next.js 16 (App Router)
**Styling:** Tailwind CSS v4 (CSS-native configuration)
**Runtime:** Node.js (LF line endings enforced via `.gitattributes`)
**Package Manager:** pnpm
**Linting:** ESLint 9 (Flat Config) + typescript-eslint
**Formatting:** Prettier + prettier-plugin-tailwindcss

This stack is selected to ensure consistency, performance, and long-term maintainability across production systems.

---

## 🏗 Project Structure

```
src/
├── app/            # Next.js App Router (routes, layouts, metadata)
├── components/     # Reusable components
│   ├── ui/         # Base primitives (buttons, inputs, shadcn, etc.)
│   └── layout/     # Structural components (navbar, footer, shells)
├── hooks/          # Custom React hooks
├── lib/            # Shared utilities & third-party integrations
├── styles/         # Global CSS & Tailwind v4 theme configuration
├── types/          # Global TypeScript interfaces and types
├── config/         # App configuration & environment mappings
└── constants/      # Immutable system constants
```

The structure emphasizes separation of concerns, composability, and predictable scaling as the codebase grows.

---

## ⚡ Automation Scripts

| Command         | Action                                       |
| --------------- | -------------------------------------------- |
| `pnpm dev`      | Starts development server                    |
| `pnpm build`    | Production build                             |
| `pnpm lint`     | Runs lint checks                             |
| `pnpm lint:fix` | Strict ESLint autofix (imports, unused code) |
| `pnpm format`   | Runs Prettier across project                 |
| `pnpm fix:all`  | Full cleanup: Prettier → ESLint autofix      |

These scripts enforce consistency and reduce manual maintenance overhead.

---

## 🛡 System Features

### 1. Strict Import Sorting

Imports are automatically grouped and sorted to minimize merge conflicts and maintain clarity.

Order enforced:

1. React / Next internals
2. External packages
3. Internal aliases (`@/*`)
4. Relative paths (`../`, `./`)
5. Styles (`.css`, `.scss`)

---

### 2. Dead Code Elimination

Unused imports and variables are automatically removed:

- On save (via editor integration)
- Via `pnpm fix:all`

Variables prefixed with `_` are ignored intentionally to allow placeholder usage.

---

### 3. Tailwind CSS v4 Integration

Tailwind v4 uses a **CSS-first configuration** model.
Theme tokens are defined directly inside:

```
src/styles/global.css
```

Example:

```css
@theme {
  --color-primary: #3b82f6;
  --font-inter: 'Inter', sans-serif;
}
```

This approach keeps styling closer to runtime CSS rather than JavaScript config files.

---

### 4. Optional SCSS Migration

If SCSS support is required:

1. Install Sass:

   ```
   pnpm add -D sass
   ```

2. Rename:

   ```
   src/styles/global.css → global.scss
   ```

3. Update import in:

   ```
   src/app/layout.tsx
   ```

The system remains fully compatible with SCSS when needed.

---

## 🎯 Philosophy

This template is built for:

- Long-term maintainability
- Predictable scaling
- Minimal technical debt
- Strong linting and formatting discipline
- Production-grade frontend systems

Every decision favors durability and clarity over short-term convenience.

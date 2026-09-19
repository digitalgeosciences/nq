# Fix GitHub Pages Build Failure

## Root Cause Analysis

The build failure seen in the GitHub Actions run (`CssSyntaxError: Missing opening {` in `src/styles.css?transform-only`) is caused by a syntax error in [`src/styles.css`](file:///e:/github/digitalgeosciences/nq/src/styles.css):
- At line 1669, there is an extra unmatched closing brace `}` at the end of the file following `.profile-modal-status { ... }`.
- When `@tailwindcss/vite` processes the CSS file during `vite build`, this dangling brace triggers `CssSyntaxError: Missing opening {`.

Additionally, the CI workflow in [`.github/workflows/build.yml`](file:///e:/github/digitalgeosciences/nq/.github/workflows/build.yml#L40-L42) uses `npm ci || npm install`, which allows CI to silently deviate from the lockfile if dependencies mismatch.

## Proposed Changes

### 1. Fix CSS Syntax Error
#### [MODIFY] [styles.css](file:///e:/github/digitalgeosciences/nq/src/styles.css)
- Remove the stray closing bracket `}` at line 1669.

### 2. Make CI Reproducible
#### [MODIFY] [build.yml](file:///e:/github/digitalgeosciences/nq/.github/workflows/build.yml)
- Change line 41 from `run: npm ci || npm install` to `run: npm ci`.

### 3. Toolchain & Lockfile Validation
#### [MODIFY] [package.json](file:///e:/github/digitalgeosciences/nq/package.json) (if needed)
- Validate `npm run build` once the CSS syntax error is resolved.
- If Vite 8 / Tailwind build passes cleanly, verify if pinning Vite/Tailwind is still desired or if the current lockfile builds reliably. If pinning is preferred, pin `vite`, `tailwindcss`, and `@tailwindcss/vite` and regenerate `package-lock.json`.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the client & prerender builds complete with 0 errors.
- Run `npm run lint` and `npm run build:dev` as required by AGENTS.md.
- Run `npm run format` to ensure style consistency.

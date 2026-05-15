# Static assets → separate repo + Vercel CDN

Host heavy/static files in **[databiqs-website-assets](https://github.com/JAFFARDEV12/databiqs-website-assets)** and load them from a CDN URL in the main app.

> **Do not move:** `node_modules/`, `build/`, bundled app JS/CSS, `package.json`, `index.html` shell, or small CRA `public` files you want colocated (`favicon.ico`, `robots.txt`) unless you intentionally externalize them.

---

## Architecture

```text
databiqs-website (CRA)          databiqs-website-assets (static only)
├── src/                        ├── media/          ← public/media/*
├── REACT_APP_ASSETS_CDN_URL    ├── assets/         ← src/assets/* (mirrored paths)
└── npm run build               └── vercel.json     ← long-cache headers
         │                                    │
         └──────── fetch <img src={cdnUrl(...)}> ─────► https://databiqs-website-assets.vercel.app/...
```

---

## Phase 0 — Prerequisites

```powershell
# From project root
node -v   # 18+
gh auth login
```

| Item | Value |
|------|--------|
| Assets repo | `https://github.com/JAFFARDEV12/databiqs-website-assets.git` |
| Local clone (sibling) | `../databiqs-website-assets` |
| CDN base (after deploy) | `https://<your-vercel-project>.vercel.app` |

---

## Phase 1 — Inventory (main repo)

```powershell
cd E:\Work\Databiqs-Projects\company-website\databiqs-website
node scripts/asset-cdn/list-static-assets.mjs
node scripts/asset-cdn/list-static-assets.mjs --json > asset-inventory.json
```

Scans `src/assets/`, `public/media/`, and other `public/` binaries. Outputs paths, sizes, and total MB.

---

## Phase 2 — Bootstrap assets repo

```powershell
# Clone empty assets repo next to website
cd E:\Work\Databiqs-Projects\company-website
git clone https://github.com/JAFFARDEV12/databiqs-website-assets.git databiqs-website-assets

# Copy Vercel template
Copy-Item -Recurse databiqs-website\assets-repo-template\* databiqs-website-assets\

cd databiqs-website-assets
git add .
git commit -m "chore: add Vercel static hosting config"
git push origin main
```

**Vercel:** Import `databiqs-website-assets` → Framework **Other** → Output directory **`.`** (root). No build command. Deploy.

Note the production URL, e.g. `https://databiqs-website-assets.vercel.app`.

Optional custom domain: `assets.databiqs.com` → CNAME to Vercel.

---

## Phase 3 — Sync files into assets repo

```powershell
cd E:\Work\Databiqs-Projects\company-website\databiqs-website
node scripts/asset-cdn/sync-to-assets-repo.mjs --target ../databiqs-website-assets
```

Copies:

- `public/media/*` → `media/`
- `src/assets/**` → `assets/**` (same relative paths)

Generates `manifest.json` (local path → CDN path).

```powershell
cd ..\databiqs-website-assets
git add .
git commit -m "chore: sync static assets from website"
git push origin main
```

Wait for Vercel deploy. Smoke-test:

```text
https://YOUR-CDN.vercel.app/media/case-study.svg
https://YOUR-CDN.vercel.app/assets/header-logo.svg
```

---

## Phase 4 — Point website at CDN

**4a. Environment**

```powershell
# databiqs-website/.env.local (not committed)
REACT_APP_ASSETS_CDN_URL=https://databiqs-website-assets.vercel.app
```

**Vercel (main site):** Project → Settings → Environment Variables → same name for Production/Preview.

**4b. Use helper everywhere**

```js
import { assetUrl } from '../utils/assetUrl';

// Before: import logo from '../../assets/header-logo.svg';
// After:
const logo = assetUrl('assets/header-logo.svg');

// Before: publicMedia('case-study.svg')
// After:
assetUrl('media/case-study.svg');
```

`assetUrl()` is in `src/utils/assetUrl.js` (wraps `publicMedia` pattern with CDN base).

**4c. Auto-replace imports (review diff!)**

```powershell
node scripts/asset-cdn/replace-imports-with-cdn.mjs --dry-run
node scripts/asset-cdn/replace-imports-with-cdn.mjs --apply
npm run build
```

Handles common `import x from '.../assets/...'` and `publicMedia('...')` patterns. **Always** review `git diff` — Lottie `.json` may need `fetch` + `lottie-react` `animationData` from URL instead of import.

---

## Phase 5 — Verify before delete

```powershell
$env:REACT_APP_ASSETS_CDN_URL="https://databiqs-website-assets.vercel.app"
node scripts/asset-cdn/verify-cdn-urls.mjs
npm run build
npm start
# Click: home, services, case studies, about team, consultation
```

`verify-cdn-urls.mjs` HEAD-requests every manifest URL; fails if any 404.

---

## Phase 6 — Remove local copies (safe)

```powershell
node scripts/asset-cdn/remove-local-assets.mjs --dry-run
node scripts/asset-cdn/remove-local-assets.mjs --apply
git add -A
git commit -m "chore: remove assets migrated to CDN"
npm run build
git push origin main
```

Only deletes paths listed in `asset-cdn-manifest.json` after successful verify.

---

## Caching & performance (best practices)

| Practice | Implementation |
|----------|----------------|
| Immutable URLs | Use content hash in filename when you change files (`hero-v2.webp`), or bump folder version `/v2/assets/...` |
| Long cache | `assets-repo-template/vercel.json` sets `Cache-Control: public, max-age=31536000, immutable` for static extensions |
| Compress rasters | Convert huge “SVG+embedded PNG” to WebP/AVIF at display size (your `case-study.svg` ~7MB is a prime candidate) |
| Lazy load | `loading="lazy"` on below-fold `<img>`; `preload` only for LCP hero |
| Video | Use CDN URLs in `<video src>`; offer poster image; consider shorter loops |
| Don’t bundle giants | Never `import` multi-MB JSON/SVG in CRA — use `assetUrl()` + runtime fetch |
| Brotli | Vercel serves compressed responses automatically |
| CORS | Same-origin not required for `<img>` / `<video>`; needed if you `fetch()` JSON cross-origin — assets repo allows `*` for GET in template |

---

## Rollback

1. Unset `REACT_APP_ASSETS_CDN_URL` (falls back to local `/media` and site origin).
2. Restore deleted files: `git checkout HEAD~1 -- src/assets public/media`.
3. Redeploy main site.

---

## Checklist

- [ ] Inventory run; team agrees what moves (videos, team photos, Lotties, large SVGs first)
- [ ] Assets repo deployed; sample URLs return 200
- [ ] `REACT_APP_ASSETS_CDN_URL` set on Vercel (main app)
- [ ] `npm run build` passes
- [ ] Manual QA on mobile + slow 3G
- [ ] `verify-cdn-urls.mjs` green
- [ ] Local asset folders removed; main repo size drops in Git

---

## Commands quick reference

```powershell
node scripts/asset-cdn/list-static-assets.mjs
node scripts/asset-cdn/sync-to-assets-repo.mjs --target ../databiqs-website-assets
node scripts/asset-cdn/replace-imports-with-cdn.mjs --dry-run
node scripts/asset-cdn/replace-imports-with-cdn.mjs --apply
$env:REACT_APP_ASSETS_CDN_URL="https://YOUR-CDN.vercel.app"
node scripts/asset-cdn/verify-cdn-urls.mjs
node scripts/asset-cdn/remove-local-assets.mjs --apply
```

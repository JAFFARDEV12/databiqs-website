# databiqs-website-assets

Static assets for [databiqs-website](https://github.com/JAFFARDEV12/databiqs-website). Deployed on Vercel as a CDN.

## Layout

- `media/` — large SVGs and similar (from website `public/media/`)
- `assets/` — mirrors website `src/assets/` paths

## Deploy

Push to `main`; Vercel serves files at repo root. No build step.

## Update assets

From the main website repo:

```bash
node scripts/asset-cdn/sync-to-assets-repo.mjs --target ../databiqs-website-assets
cd ../databiqs-website-assets && git add . && git commit -m "chore: sync assets" && git push
```

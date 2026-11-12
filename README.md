# Pooja Khatane — Forensic Risk Investigator Portfolio (`Case Files`)

A responsive, zero-build static web portfolio replicating the 7-page **Pooja Khatane Case Files** design (`01 · The Crime Scene` through `07 · The Next Investigation`), ready for instant deployment on **Vercel**.

## Project Structure

- `index.html` — Main portfolio markup covering all 7 case file sections, interactive exhibit modals, and Tip Line / CV request dispatch modal
- `styles.css` — Custom noir corkboard, mahogany desk, open two-page parchment dossier, polaroid card, and rubber-stamp styling
- `app.js` — Interactive controls (Scroll vs. Slide Deck presentation mode, Forensic Spotlight Lens, Case Exhibit breakdowns, Secret Identity declassification, and clipboard helpers)
- `assets/` — High-resolution artwork and polaroid evidence thumbnails extracted from the original portfolio design
- `vercel.json` — Vercel static hosting and asset caching configuration
- `package.json` — Local preview helper (`npm run dev`)

## Deploying to Vercel

1. **Via Vercel Dashboard (GitHub / GitLab / Bitbucket)**:
   - Push this folder to a Git repository.
   - Import the repository at [vercel.com/new](https://vercel.com/new) with **Framework Preset: Other** and **Output Directory: `.`**.
   - Click **Deploy**.
2. **Via Vercel CLI**:
   ```bash
   npx vercel --prod
   ```

## Customising Contact Links

In `index.html` (Section `07 · The Next Investigation`) and `app.js` (`submitDispatchForm`), replace `your@email.com` and `linkedin.com/in/your-profile` with your live email address and LinkedIn URL.

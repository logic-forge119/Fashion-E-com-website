# Frontend Live Deployment Guide

This project is a 100% buildless frontend application ready to deploy on **GitHub Pages**, **Vercel**, or **Netlify** with zero build configuration.

---

## 1. Deploy on GitHub Pages (Recommended - 100% Free & Automatic)

We have already configured an automated deployment workflow: `.github/workflows/deploy.yml`.

1. Go to your repository on GitHub: [Fashion-E-com-website](https://github.com/logic-forge119/Fashion-E-com-website)
2. Click **Settings** (top tab).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Source**, change the dropdown to:
   - **GitHub Actions**
5. That's it! GitHub will automatically trigger the deployment action.
6. Within 1-2 minutes, your site will be live at:
   `https://logic-forge119.github.io/Fashion-E-com-website/`

---

## 2. Deploy on Vercel

Configured automatically via `vercel.json` (`outputDirectory: "dist"`).

1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** > **Project**.
3. Import `logic-forge119/Fashion-E-com-website`.
4. Click **Deploy** (no build settings need to be modified).
5. Vercel will provide your live URL (e.g., `https://fashion-e-com-website.vercel.app`).

---

## 3. Deploy on Netlify

Configured automatically via `netlify.toml` (`publish = "dist"`).

### Option A: Import from Git
1. Log into [netlify.com](https://www.netlify.com).
2. Click **Add new site** > **Import an existing project** > **GitHub**.
3. Select `Fashion-E-com-website`.
4. Leave build command empty. Netlify reads `netlify.toml` automatically.
5. Click **Deploy site**.

### Option B: Drag and Drop (Instant, No Login)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `dist/` folder directly from your computer into the browser.
3. Your site goes live in 5 seconds.

---

## Verification
Run automated tests locally anytime:
```bash
node tests/flows.cjs
```

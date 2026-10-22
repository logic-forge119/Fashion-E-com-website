# GitHub + Netlify setup

Extract the ZIP and open the fashion-website folder in VS Code.
Create an empty GitHub repository without adding a README. In your project terminal:

```bash
git init
git add .
git commit -m "Initial fashion storefront demo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the repository URL with your actual GitHub URL. Sign in when prompted.

In Netlify select Add new project / Import an existing project, connect GitHub and select your repo.
Base directory: empty. Build command: empty. Publish directory: dist.
No npm install, build step or environment variables are needed. netlify.toml sets the publish directory. Subsequent pushes can redeploy automatically.
For drag-and-drop hosting, upload only the dist folder to Netlify.
For Vercel use Other framework, no build command, output directory dist.
Hash navigation supports direct links and browser back/forward without rewrites.

Run verification: node tests/flows.cjs

After deploying, test product selection → bag → demo login → checkout → transaction submission → pending review. Use fictional details only. Demo Studio can simulate payment review.

This is a clickable frontend demo. Authentication, orders and admin review run locally in the browser. No real backend, database, wallet integration or trusted authorization exists. Do not accept real orders or payments. Photography is illustrative and fonts/images load externally. Complete backend requirements are documented in TASKS.md and ARCHITECTURE.md.

Original Git metadata and Sites hosting identity are excluded. All application source, tests and project documentation are included.

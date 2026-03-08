# Kenneth Molina Portfolio

Portfolio site built with React + Vite and styled with Tailwind CSS v4.

## Stack
- React 19
- Vite 7
- Tailwind CSS v4
- Geist Variable font
- Phosphor icons

## Local Development
```bash
npm install
npm run dev
```

Default URL: `http://localhost:5173`

## Quality Checks
```bash
npm run check
```

Or run separately:
```bash
npm run lint
npm run build
```

## Deploy to Vercel

### Option 1: Vercel Dashboard (recommended)
1. Push this project to GitHub.
2. In Vercel, click **Add New Project** and import the repo.
3. Vercel will detect Vite automatically.
4. Build settings should be:
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
vercel --prod
```

## GitHub Safety Checklist
- Keep secrets out of git:
  - `.env`, `.env.*`, and `.vercel/` are ignored in `.gitignore`.
  - Use Vercel Project Settings -> Environment Variables for secrets.
- Verify no sensitive keys exist before pushing:
```bash
rg -n "(AIza|sk_live|sk_test|ghp_|github_pat_|BEGIN PRIVATE KEY|API_KEY|SECRET)" -S . --glob '!node_modules/**' --glob '!dist/**'
```
- Run `npm run check` before each commit.

## Project Structure
- App UI/content: `src/App.jsx`
- Theme tokens and motion: `src/index.css`
- Vercel deploy config: `vercel.json`

# Javier Portfolio

A responsive personal portfolio with dark and light themes, animated sections, a holographic profile portrait, and a local portfolio assistant. Built with React, TypeScript, and Vite.

## Update your details

All portfolio content is stored in one file:

`src/data/portfolio.ts`

Edit that file to replace the sample titles, biography, awards, education, leadership roles, skills, languages, projects, email address, and social links.

The current profile image uses the GitHub account avatar. To use a different image:

1. Add the image to `public/`, for example `public/profile.jpg`.
2. Set `profileImage` in `src/data/portfolio.ts` to `/Javier-Portfolio/profile.jpg`.
3. Update `profileAlt` with an accurate description.

`public/profile-placeholder.svg` is used if the configured image cannot load.

## Run locally

```bash
npm install
npm run dev
```

Open the address printed by Vite.

## Verify

```bash
npm test
npm run typecheck
npm run build
```

## Contact form

GitHub Pages cannot process forms on its own. The message form validates the fields and opens the visitor's email application with a prepared message. Replace `email` in `src/data/portfolio.ts` before publishing.

## Portfolio assistant

The assistant works entirely in the browser, requires no API key, and builds answers from `src/data/portfolio.ts`. Its matching logic is in `src/lib/assistant.ts`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated.

In the GitHub repository, open **Settings > Pages** and set **Source** to **GitHub Actions**. The published URL will be:

`https://johnbenedictjavier.github.io/Javier-Portfolio/`

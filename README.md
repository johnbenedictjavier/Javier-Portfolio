# Javier Portfolio

A responsive personal portfolio with dark and light themes, animated sections, a holographic profile portrait, and a local portfolio assistant. Built with React, TypeScript, and Vite.

## Update your details

All portfolio content is stored in one file:

`src/data/portfolio.ts`

Edit that file to update the biography, award details, education, leadership roles, skills, languages, projects, email address, and social links.

The site checks for these exact image filenames:

```text
public/
└── images/
    ├── profile/
    │   └── john-benedict-javier.jpg
    ├── awards/
    │   ├── dost-sei-scholar.jpg
    │   ├── competition-01.jpg
    │   ├── academic-rank-1-2024.jpg
    │   ├── academic-salutatorian-jhs-2022.jpg
    │   └── academic-salutatorian-elementary-2017.jpg
    └── projects/
        ├── tech-revive.jpg
        └── elfresco-ph.jpg
```

Use lowercase filenames exactly as shown. JPG, PNG, and WebP are supported, but the extension in `src/data/portfolio.ts` must match the actual file. For additional award cards, use names such as `recognition-02.jpg` and add the matching card data to the appropriate `awardGroups` entry.

The GitHub avatar and designed SVG artwork are used automatically when local images are unavailable.

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

GitHub Pages cannot process forms on its own. The message form validates the fields and opens the visitor's email application with a prepared message addressed to the `email` configured in `src/data/portfolio.ts`.

## Portfolio assistant

The assistant works entirely in the browser, requires no API key, and builds answers from `src/data/portfolio.ts`. Its matching logic is in `src/lib/assistant.ts`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated.

In the GitHub repository, open **Settings > Pages** and set **Source** to **GitHub Actions**. The published URL will be:

`https://johnbenedictjavier.github.io/Javier-Portfolio/`

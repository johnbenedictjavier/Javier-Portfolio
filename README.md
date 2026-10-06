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
    ├── events/
    │   ├── events-background.jpg
    │   ├── iot-philippines-2024-01.jpg
    │   ├── pcta-tech-show-2025-01.jpg
    │   └── wocee-2026-01.jpg
    ├── proof/
    │   └── optional-certificate-or-registration.pdf
    └── projects/
        ├── tech-revive.jpg
        ├── elfresco-ph.jpg
        ├── laurel-and-ladle.jpg
        ├── barangay-information-system.jpg
        └── payroll-management-system.jpg
```


Use lowercase filenames exactly as shown. JPG, PNG, and WebP are supported, but the extension in `src/data/portfolio.ts` must match the actual file. For additional award cards, use names such as `recognition-02.jpg` and add the matching card data to the appropriate `awardGroups` entry.

Each award and event has an `images` array in `src/data/portfolio.ts`. Add any number of image paths to that array to create a gallery; multi-image galleries rotate automatically every five seconds and can also be controlled manually. Opened images slowly pan across their scrollable frame while still supporting touch and mouse scrolling. Set `proofUrl` to an image or PDF path when a certificate, ticket, or registration record is available. Proof images remain scrollable so the full document can be read. Empty arrays and proof links are handled automatically without broken controls.

Add `public/images/events/events-background.jpg` to replace the built-in illustrated Events and Conferences background. Project cards also include designed SVG fallbacks, so you can replace their `image` paths with screenshots whenever they are available.

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

The contact form sends messages through Formspree, so it does not open the visitor's email application. Create a Formspree form, then set its endpoint in one of these places:

- Add the endpoint to `formspreeEndpoint` in `src/data/portfolio.ts`.
- Or set `VITE_FORMSPREE_ENDPOINT` in the build environment.

The endpoint looks like `https://formspree.io/f/your-form-id`. Formspree delivers submissions to the email address configured for that form. Do not put SMTP passwords or other private mail credentials in the frontend.

## Portfolio assistant

The assistant works entirely in the browser, requires no API key, and builds answers from `src/data/portfolio.ts`. Its matching logic is in `src/lib/assistant.ts`.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated.

In the GitHub repository, open **Settings > Pages** and set **Source** to **GitHub Actions**. The published URL will be:

`https://johnbenedictjavier.github.io/Javier-Portfolio/`

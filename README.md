# Aldosimone Di Rosa — Developer Portfolio

Personal portfolio for [aldosimone99.github.io](https://aldosimone99.github.io), presenting my work as a Full Stack Developer building SaaS products and web applications.

## Project structure

```text
/
├── index.html                 # Portfolio content and project data
├── projects/beauty-broker-world/index.html # Text-first BBW case study
├── scss/                      # Sass source and compiled stylesheet
│   ├── style.scss             # Sass entry point
│   ├── style.css              # CSS served by GitHub Pages
│   └── _*.scss                # Section and responsive styles
├── fonts/                     # Locally hosted fonts
├── icons/                     # Social and technology icons
├── assets/                    # Local motion layer and mobile navigation
├── 2825810.gif                # Archived pixel-art asset (not loaded)
├── OpenGraph.png              # Social sharing image
├── robots.txt                 # Search crawler rules
├── sitemap.xml                # Public page URLs
├── Page2/                     # CV page
└── CV Aldosimone Di Rosa *.pdf
```

The site is static HTML and CSS with Sass as a build-time tool. It has no client-side framework or runtime JavaScript dependency. The tracked `scss/style.css` is the stylesheet linked by the homepage.

The Studio design uses a charcoal background, warm paper project section and lime accent. `scss/_base.scss` contains the shared tokens and local font declarations, `scss/_studio.scss` styles the homepage, and `scss/_case-study.scss` styles the Beauty Broker World case study. The other section partials are retained as legacy source and are not imported by `scss/style.scss`.

DM Sans and Instrument Serif are served locally as WOFF2 files; their licenses are in `fonts/dmsans-OFL.txt` and `fonts/instrumentserif-OFL.txt`. The public BBW logo is served as WebP while its PNG source is preserved. The small motion layer in `assets/motion/` supplies hover, press and hero entrance behavior and honors reduced-motion preferences. `assets/site.js` enhances the native mobile menu with keyboard navigation, Escape, focus restoration and background scroll locking.

## Local development

Install dependencies and compile the stylesheet:

```bash
npm ci
npm run build
```

To recompile Sass while editing:

```bash
npm run watch
```

Open `index.html` in a local static server to check root-relative assets and links. For example, `python3 -m http.server 8000` serves the project root at `http://127.0.0.1:8000/`. The site expects to be hosted at the domain root, as it is on GitHub Pages.

## Build

`npm run build` compiles `scss/style.scss` to `scss/style.css` and updates the source map. Commit both generated files along with Sass source changes so GitHub Pages serves the latest styles.

## GitHub Pages deployment

GitHub Pages serves the repository root from the `main` branch. Pushing changes to `main` publishes the static files; there is no separate application build or deployment workflow. Before publishing Sass changes, run `npm run build` and commit the updated CSS output.

## Updating portfolio projects

Edit the featured project and project rows in `index.html`:

- The featured Beauty Broker World section appears first in `#projects`.
- CityLife, React Dashboard, and Moya are grouped under “More experiments”.
- Keep links tied to public project pages or public repositories. Do not add private repositories, credentials, client or patient information, or unsupported outcome claims.
- Keep copy clear about project status and use only links that are publicly accessible.

## Project imagery and confidentiality

- Beauty Broker World is presented with its existing official logo and public website link. Never add screenshots or mockups of its application, dashboards, administration, messaging, payments, or authenticated areas, even if they are anonymized or use demo data.
- Do not publish proprietary code, private APIs, database schemas, security details, or confidential business information.
- The repository currently has no Moya screenshots. Do not invent or generate app screens, and do not add an App Store link unless the app is actually published there.
- For other projects, use only authentic screenshots that are available in the repository and approved for public use. Add descriptive alt text and image dimensions to prevent layout shift.

## Contact

- Portfolio: https://aldosimone99.github.io
- GitHub: https://github.com/Aldosimone99
- LinkedIn: https://www.linkedin.com/in/aldosimone-di-rosa-b5a55716b/
- Email: aldosimone@live.com

# Aldosimone Di Rosa — Developer Portfolio

Personal portfolio for [aldosimone99.github.io](https://aldosimone99.github.io), presenting my work as a Full Stack Developer building SaaS products and web applications.

## Project structure

```text
/
├── index.html                 # Portfolio content and project data
├── scss/                      # Sass source and compiled stylesheet
│   ├── style.scss             # Sass entry point
│   ├── style.css              # CSS served by GitHub Pages
│   └── _*.scss                # Section and responsive styles
├── fonts/                     # Locally hosted fonts
├── icons/                     # Social and technology icons
├── 2825810.gif                # Pixel-art hero background
├── OpenGraph.png              # Social sharing image
├── robots.txt                 # Search crawler rules
├── sitemap.xml                # Public page URLs
├── Page2/                     # CV page
└── CV Aldosimone Di Rosa *.pdf
```

The site is static HTML and CSS with Sass as a build-time tool. It has no client-side framework or runtime JavaScript dependency. The tracked `scss/style.css` is the stylesheet linked by the homepage.

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

Edit the project cards in `index.html`:

- The featured Beauty Broker World card appears first in `#projects`.
- CityLife and React Dashboard are grouped under “Other Projects”.
- Keep links tied to public project pages or public repositories. Do not add private repositories, credentials, client or patient information, or unsupported outcome claims.
- Keep copy clear about project status and use only links that are publicly accessible.

## Adding or replacing screenshots

The Beauty Broker World card currently uses its logo because no approved application screenshots are included. To add a product screenshot, place an approved, public-safe image in `images/projects/` and replace the logo in `.project-visual` in `index.html`. Use descriptive alt text, set width and height (or an aspect ratio in CSS) to avoid layout shift, and use `loading="lazy"` for images below the hero. Use anonymized demo data; never include patient information, credentials, or confidential business screens.

## Contact

- Portfolio: https://aldosimone99.github.io
- GitHub: https://github.com/Aldosimone99
- LinkedIn: https://www.linkedin.com/in/aldosimone-di-rosa-b5a55716b/
- Email: aldosimone@live.com

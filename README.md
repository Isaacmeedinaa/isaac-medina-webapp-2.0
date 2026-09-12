# Isaac Medina — Portfolio

A responsive React + TypeScript portfolio built with Vite. Firebase Hosting serves the compiled static site. The build prerenders the portfolio into HTML, and React hydrates its interactive controls in the browser. No application server, database, API keys, or paid backend is required.

## Local development

Use Node.js 22.12+ (Node 22 LTS recommended).

```sh
npm install
npm run dev
```

Open http://localhost:5173. `npm start` is an alias for the same development server.

## Publish to Firebase

The existing Firebase project, `isaac-dev-webapp`, remains configured in `.firebaserc`.

First authenticate on this computer:

```sh
npm run firebase:login
```

Then publish:

```sh
npm run deploy
```

Firebase runs the type check and production build automatically through the `predeploy` hook, then uploads only `dist/`. A failed build prevents deployment. The Firebase CLI is installed with the project; no global installation is needed.

For a temporary public preview channel (expires in seven days):

```sh
npm run deploy:preview
```

To inspect the production build locally:

```sh
npm run build
npm run preview
```

Open http://localhost:4173. The site uses anchor navigation, so Firebase does not need a blanket rewrite. Missing files and routes receive the custom 404 page rather than returning the homepage as JavaScript or an image.

## Make it yours

| What to update                                          | Where                            |
| ------------------------------------------------------- | -------------------------------- |
| Email, social links, projects, experience, capabilities | `src/content.ts`                 |
| Intro, about, contact copy and page layout              | `src/App.tsx`                    |
| Colors, spacing, typography, responsive layouts         | `src/styles.css`                 |
| Headshot and official app artwork                       | `static/images/`                 |
| Downloadable public résumé                              | `static/isaac-medina-resume.pdf` |
| Browser title and sharing metadata                      | `index.html`                     |
| Hosting settings                                        | `firebase.json`                  |

The downloadable résumé is the original September 12, 2026 PDF supplied by Isaac, preserved without edits. To update it, replace `static/isaac-medina-resume.pdf`; all résumé links use that file. PDF generation is not part of installation or deployment.

Contact links open the visitor’s email application. The copy button offers a second way to reach out. There is no third-party contact form or claim that an email has been sent.

Project details distinguish sole ownership at FINRA from team contributions at Vivid Seats and Walmart. App Store artwork depicts the public products, not a claim that every screen was personally built by Isaac. See `static/images/SOURCES.md` for sources.

## Original site

The original `public/`, `app.js`, `bin/`, and `routes/` remain as reference, including existing uncommitted work. They are not used by Vite or included in the Firebase deployment. The new app uses `static/` for public assets; avoid adding new assets to the old `public/` folder.

## Checks

```sh
npm run typecheck
npm run build
npm audit --omit=dev
```

Manual checks: desktop and mobile layout, navigation, all three project filters, project dialogs (including Escape and focus restoration), expandable experience, résumé download, and contact links. Third-party mail delivery is handled by the visitor’s email client.

Reference: [Vite static deployment](https://vite.dev/guide/static-deploy) and [Firebase Hosting configuration](https://firebase.google.com/docs/hosting/full-config).

## Sharing and dependency maintenance

Sharing metadata uses the existing project’s default domain, `isaac-dev-webapp.web.app`. If you use a custom domain, update the absolute `og:image` URL in `index.html`.

The Firebase CLI currently introduces nine moderate development-only audit findings through its upstream dependency tree. These tools are not bundled into the public site. Compatible audit fixes were attempted; npm’s remaining suggestion would downgrade Firebase across major versions, so the current CLI is retained. Recheck with `npm audit` when updating the toolchain.

# Suhan Reddy Vanga Portfolio

A modern personal portfolio website built with Next.js and React. This project showcases my profile, experience, projects, technical skills, education, and contact information in a clean and visually rich layout inspired by streaming platform UI design.

## Overview

This portfolio is designed to:

- Present my professional profile in a polished way
- Highlight my AI/ML and web development work
- Make project details easy to explore
- Be deployable on GitHub Pages with static export
- Stay simple to run locally and maintain

The website includes sections for:

- Home
- Experience
- Projects
- Skills
- Education
- Contact

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion

## Project Structure

```text
MyPortfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── BentoGrid.tsx
├── public/
│   ├── .nojekyll
│   └── assets/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next-env.d.ts
├── README.md
└── .gitignore
```

## Main Files

### app/page.tsx
This is the main page of the portfolio. It contains:

- Navigation bar
- Hero section
- Experience cards
- Projects carousel
- Skills/education content
- Contact footer
- Modal pop-up for detail views

### app/layout.tsx
Defines the page layout, metadata, and base app wrapper.

### app/globals.css
Contains styling for the Netflix-inspired streaming layout, animations, responsive design, and page visuals.

### next.config.ts
Configures the Next.js app for static export and GitHub Pages deployment.

### .github/workflows/deploy-pages.yml
GitHub Actions workflow that builds and deploys the website to GitHub Pages.

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- A GitHub account (for deployment)

## Installation

1. Open a terminal in the project folder.
2. Run:

```bash
npm install
```

## Run Locally

Use the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for Production

To create a production build:

```bash
npm run build
```

This creates a production-ready build of the app.

## Run Production Build Locally

```bash
npm run start
```

## GitHub Pages Deployment

This project is configured to work with GitHub Pages using a static export.

### Why GitHub Pages needed configuration

GitHub Pages does not run a normal Next.js dev server directly. For this app to work correctly, the project must be exported as static files and deployed through GitHub Actions.

### Setup used

- `next.config.ts` enables static export
- `public/.nojekyll` prevents Jekyll processing
- GitHub Actions workflow builds the app and deploys it

### Deployment steps

1. Push changes to the main branch.
2. Go to your GitHub repository.
3. Open Settings.
4. Click Pages.
5. Under Source, choose GitHub Actions.
6. The workflow will build and deploy the site automatically.

The live URL will usually follow this pattern:

```text
https://<your-username>.github.io/MyPortfolio/
```

For this project, the repository name is `MyPortfolio`, so the site is expected at:

```text
https://suhanreddy.github.io/MyPortfolio/
```

## Notes

- The project is meant to be published from the main branch.
- Only one active branch is kept for this repo to keep the deployment clean and simple.
- The app is static-exported for Pages compatibility, so dynamic server features are not used in the deployed version.

## Important Files for Deployment

- [next.config.ts](next.config.ts)
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
- [public/.nojekyll](public/.nojekyll)

## License

This project is for personal portfolio use and is not currently configured with a formal public license unless you add one later.

## Contact

If you want to connect or collaborate:

- GitHub: https://github.com/SuhanReddy
- LinkedIn: https://www.linkedin.com/in/suhan-reddy-vanga-b475b9246/
- Email: vanga.suhanreddy@gmail.com

## Summary

This is a clean, modern, personal portfolio website built with Next.js. It is fully set up for local development and GitHub Pages deployment, and it is designed to be easy to understand, edit, and publish.

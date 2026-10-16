# Suhan Reddy Vanga Portfolio

Personal portfolio showcasing my AI/ML and web development background, projects, research, skills, education, and contact information.

## Features

- Profile and experience, including my Teaching Assistant role for Introduction to LLMs at TU Darmstadt
- Featured AI/ML and web projects, research publication, technical skills, spoken languages, certifications, and education
- Responsive streaming-inspired interface with project-detail dialogs, carousels, and light/dark themes
- Downloadable resume and links to my GitHub, LinkedIn, email, and publications

## Tech Stack

Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, and Framer Motion.

## Run Locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to create the static production export in `out/`; `npm run start` runs the Next.js production server locally.

## GitHub Pages

The project is statically exported by `next.config.ts` and deployed from `main` by [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml). In **Repository Settings → Pages**, set the source to **GitHub Actions**. Keep only one Pages deployment workflow so deployments do not conflict.

Live site: https://suhanreddy.github.io/MyPortfolio/

## Key Files

- `app/page.tsx`: portfolio content and interactions
- `app/layout.tsx`: document layout and metadata
- `app/globals.css`: responsive styles and themes
- `public/assets/`: portfolio images; `public/Resume.pdf`: downloadable resume
- `public/.nojekyll`: prevents Jekyll processing
- `next.config.ts`: static export and repository base path

## Contact

- GitHub: https://github.com/SuhanReddy
- LinkedIn: https://www.linkedin.com/in/suhan-reddy-vanga-b475b9246/
- Email: vanga.suhanreddy@gmail.com

No formal public license is currently configured.

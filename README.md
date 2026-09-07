# MentorCruise — React Frontend

This is a beginner-friendly React + Vite + Tailwind CSS rebuild of the original MentorCruise HTML/CSS/JavaScript project.

## Main fix: routing
The old project used normal HTML links such as `href="course.html"` and links with Windows-style backslashes. In the React version, navigation uses **React Router** and `<Link>` / `<NavLink>`.

Routes:
- `/` — Home
- `/courses` — Course selection
- `/technical` — Technical mentors
- `/soft` — Soft-skill mentors
- `/mentor/:id` — Mentor profile
- `/signup` — Signup form
- `/contact` — Contact form

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

The project includes `vercel.json` so SPA routes can be served correctly after deployment.

## Beginner structure
- `src/components` — reusable UI components
- `src/pages` — pages
- `src/data/mentors.js` — mentor data
- `src/App.jsx` — React Router routes
- `src/main.jsx` — app entry point
- `src/index.css` — Tailwind import + small global styles

No backend/database is included because this is a frontend-only project.
